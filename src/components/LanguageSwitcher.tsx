import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

function setCookie(name: string, value: string, days = 365) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  const hostname = window.location.hostname;
  // Set on current domain and root path
  document.cookie = `${name}=${value};${expires};path=/`;
  // Also set with explicit domain to improve reliability
  document.cookie = `${name}=${value};${expires};path=/;domain=.${hostname}`;
}

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : null;
}

function ensureGoogleTranslateScript() {
  if (window.google && window.google.translate) return;
  if (document.getElementById('google-translate-script')) return;

  window.googleTranslateElementInit = () => {
    try {
      // Base language of the site is Portuguese
      // Limit included languages to English only (PT stays original)
      // The hidden element is rendered by this component
      // eslint-disable-next-line no-new
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'pt',
          includedLanguages: 'en',
          autoDisplay: false,
        },
        'google_translate_element'
      );
    } catch (e) {
      // no-op
    }
  };

  const s = document.createElement('script');
  s.id = 'google-translate-script';
  s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  s.async = true;
  document.body.appendChild(s);
}

function extractLangFromCookie(): 'en' | 'pt' | null {
  const val = getCookie('googtrans');
  if (!val) return null;
  const parts = val.split('/');
  const last = parts[parts.length - 1];
  return (last === 'en' || last === 'pt') ? (last as 'en' | 'pt') : null;
}

function deleteCookie(name: string) {
  try {
    const hostname = window.location.hostname;
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${hostname}`;
  } catch {}
}

function restoreOriginal() {
  // Clear translate cookies and reset to original (no translation)
  deleteCookie('googtrans');
  try {
    const combo = document.querySelector<HTMLSelectElement>('select.goog-te-combo');
    if (combo) {
      combo.value = '';
      combo.dispatchEvent(new Event('change'));
    }
  } catch {}
}

function translateWhenReady(lang: 'en' | 'pt', timeoutMs = 4000) {
  const start = Date.now();
  ensureGoogleTranslateScript();
  const tryTranslate = () => {
    const ok = forceTranslate(lang);
    if (ok || Date.now() - start > timeoutMs) {
      clearInterval(timer);
    }
  };
  const timer = setInterval(tryTranslate, 200);
  // Kick once immediately
  tryTranslate();
}

function applyLanguage(lang: 'en' | 'pt') {
  if (lang === 'en') {
    // Google Translate cookie format
    setCookie('googtrans', `/pt/en`);
    localStorage.setItem('preferredLanguage', 'en');
    // Reload to guarantee consistent translation across the app
    window.location.reload();
  } else {
    // Ensure PT shows original content (no translation)
    localStorage.setItem('preferredLanguage', 'pt');
    deleteCookie('googtrans');
    // Reload to fully restore original content
    window.location.reload();
  }
}

function forceTranslate(lang: 'en' | 'pt') {
  try {
    if (lang === 'pt') {
      restoreOriginal();
      return true;
    }
    const combo = document.querySelector<HTMLSelectElement>('select.goog-te-combo');
    if (combo && combo.value !== lang) {
      combo.value = lang;
      combo.dispatchEvent(new Event('change'));
      return true;
    }
    // Ensure cookie also reflects language in case translate script reads it
    setCookie('googtrans', `/pt/${lang}`);
  } catch {}
  return false;
}

export default function LanguageSwitcher() {
  const [ready, setReady] = useState(false);
  const preferred = useMemo(() => {
    return (localStorage.getItem('preferredLanguage') as 'en' | 'pt' | null);
  }, []);
  const location = useLocation();

  useEffect(() => {
    ensureGoogleTranslateScript();
    // Defer marking ready a bit to allow script to attach (best effort)
    const t = setTimeout(() => setReady(true), 800);
    return () => clearTimeout(t);
  }, []);

  // Force-hide Google banner and gadgets aggressively
  useEffect(() => {
    const hide = () => {
      try {
        const iframe = document.querySelector<HTMLIFrameElement>('iframe.goog-te-banner-frame');
        if (iframe) {
          iframe.style.display = 'none';
          iframe.parentElement?.removeChild(iframe);
        }
        document.body.style.top = '0px';
        (document.querySelector('.goog-te-banner-frame') as HTMLElement | null)?.setAttribute('style', 'display:none !important');
        (document.querySelector('.goog-te-gadget') as HTMLElement | null)?.setAttribute('style', 'display:none !important');
        (document.querySelector('#goog-gt-tt') as HTMLElement | null)?.setAttribute('style', 'display:none !important');
      } catch {}
    };

    hide();
    const start = Date.now();
    const interval = setInterval(() => {
      hide();
      // pare após 15s para evitar loops infinitos
      if (Date.now() - start > 15000) clearInterval(interval);
    }, 250);
    const mo = new MutationObserver(hide);
    mo.observe(document.documentElement, { childList: true, subtree: true });
    return () => {
      clearInterval(interval);
      mo.disconnect();
    };
  }, []);

  useEffect(() => {
    // Auto-detect browser language on first visit (sem reload)
    const currentCookie = extractLangFromCookie();
    const hasChoice = !!preferred || !!currentCookie;
    if (!hasChoice) {
      const browser = (navigator.language || navigator.languages?.[0] || 'pt').toLowerCase();
      if (browser.startsWith('en')) {
        setCookie('googtrans', '/pt/en');
        localStorage.setItem('preferredLanguage', 'en');
        translateWhenReady('en');
      } else {
        // Garantir PT original
        localStorage.setItem('preferredLanguage', 'pt');
        restoreOriginal();
      }
    }
  }, [preferred]);

  const activeLang: 'en' | 'pt' = (preferred || extractLangFromCookie() || 'pt');

  // Se usuário escolher PT, garanta original sempre
  useEffect(() => {
    if (activeLang === 'pt') {
      restoreOriginal();
    }
  }, [activeLang]);

  // Re-aplica tradução após trocas de rota somente se EN estiver ativo
  useEffect(() => {
    if (activeLang === 'en') {
      let attempts = 0;
      const maxAttempts = 6;
      const interval = setInterval(() => {
        attempts++;
        forceTranslate('en');
        if (attempts >= maxAttempts) clearInterval(interval);
      }, 250);
      return () => clearInterval(interval);
    }
  }, [location.pathname, activeLang]);

  return (
    <div className="fixed top-2 right-2 z-[1000] flex items-center gap-2 select-none">
      {/* Hidden Google element used by the script */}
      <div id="google_translate_element" style={{ display: 'none' }} />

      {/* PT (Português) */}
      <button
        type="button"
        aria-label="Português"
        onClick={() => activeLang !== 'pt' && applyLanguage('pt')}
        className={`px-2 py-1 rounded-md bg-black/50 backdrop-blur border ${activeLang === 'pt' ? 'border-white text-white' : 'border-white/40 text-white/80'} hover:border-white`}
        title="Português"
      >
        <span className="font-semibold text-xs">PT</span>
      </button>

      {/* EN (English) */}
      <button
        type="button"
        aria-label="English"
        onClick={() => activeLang !== 'en' && applyLanguage('en')}
        className={`px-2 py-1 rounded-md bg-black/50 backdrop-blur border ${activeLang === 'en' ? 'border-white text-white' : 'border-white/40 text-white/80'} hover:border-white`}
        title="English"
      >
        <span className="font-semibold text-xs">EN</span>
      </button>
    </div>
  );
}
