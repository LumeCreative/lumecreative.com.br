export const config = { runtime: 'edge' };

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
      status: 405,
      headers: { 'content-type': 'application/json' },
    });
  }

  let data: any;
  try {
    data = await req.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    });
  }

  const payload = {
    name: data?.name || data?.nome || '',
    email: data?.email || '',
    subject: data?.subject || data?.assunto || 'Novo contato pelo site',
    phone: data?.phone || data?.telefone || '',
    message: data?.message || data?.mensagem || '',
    _cc: data?._cc || 'lui.eduardo.lui@outlook.com',
    _subject: data?._subject || 'Novo contato - Lume Creative Studio',
    _template: data?._template || 'table',
    _captcha: data?._captcha ?? 'false',
  } as Record<string, string>;

  try {
    const resp = await fetch('https://formsubmit.co/ajax/lume@lumecreative.com.br', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const text = await resp.text();
    const headers = new Headers({ 'content-type': 'application/json' });
    return new Response(text, { status: resp.status, headers });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: 'Upstream request failed', detail: String(err) }), {
      status: 502,
      headers: { 'content-type': 'application/json' },
    });
  }
}

