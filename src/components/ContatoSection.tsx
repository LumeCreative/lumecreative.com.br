import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import AnimatedButton from './AnimatedButton';

// Formata número brasileiro com DDD para telefone fixo (10 dígitos) e celular (11 dígitos)
function formatPhoneBR(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (!digits) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

const ContatoSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    telefone: '',
    mensagem: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'telefone') {
      setFormData(prev => ({ ...prev, telefone: formatPhoneBR(value) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      // Envia via API própria (proxy na Vercel) para evitar CORS/anti-spam
      const payload = {
        nome: formData.nome,
        email: formData.email,
        assunto: formData.assunto || 'Novo contato pelo site',
        telefone: formData.telefone,
        mensagem: formData.mensagem,
        _cc: 'lui.eduardo.lui@outlook.com',
        _subject: 'Novo contato - Lume Creative Studio',
        _template: 'table',
        _captcha: 'false',
      } as Record<string, string>;

      let res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload),
      });

      // Se a API falhar, tenta diretamente no FormSubmit
      if (!res.ok) {
        res = await fetch('https://formsubmit.co/ajax/lume@lumecreative.com.br', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(payload),
        });
      }

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || 'Falha ao enviar.');
      }

      toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({ nome: '', email: '', assunto: '', telefone: '', mensagem: '' });
    } catch (err) {
      console.error('Erro ao enviar formulário:', err);
      toast.error('Não foi possível enviar sua mensagem. Tente novamente.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-48 flex flex-col items-center justify-center bg-[#1e1e1e]">
      <div className="container mx-auto px-4 lg:max-w-screen-lg">
        <div className="w-full flex items-center justify-center text-center mb-20">
          <p className="w-10/12 text-white text-xl xl:text-4xl 2xl:text-4xl font-clash tracking-wider mb-4">
            <span className='font-semibold'>Pronto para transformar suas ideias em realidade?</span> Vamos conversar e começar essa jornada juntos!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
          <div className="space-y-4">
            <motion.input
              type="text"
              name="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleChange}
              className="w-full bg-transparent border border-red-500 rounded-xl px-4 py-3 placeholder-gray-400 focus:outline-none transition-all duration-300 focus:border-red-400 focus:shadow-lg focus:shadow-red-500/20"
              whileFocus={{ scale: 1.02 }}
              required
            />
            <motion.input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border border-red-500 rounded-xl px-4 py-3 placeholder-gray-400 focus:outline-none transition-all duration-300 focus:border-red-400 focus:shadow-lg focus:shadow-red-500/20"
              whileFocus={{ scale: 1.02 }}
              required
            />
            <motion.input
              type="text"
              name="assunto"
              placeholder="Assunto"
              value={formData.assunto}
              onChange={handleChange}
              className="w-full bg-transparent border border-red-500 rounded-xl px-4 py-3 placeholder-gray-400 focus:outline-none transition-all duration-300 focus:border-red-400 focus:shadow-lg focus:shadow-red-500/20"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.input
              type="text"
              name="telefone"
              placeholder="Telefone"
              value={formData.telefone}
              onChange={handleChange}
              inputMode="numeric"
              maxLength={15}
              className="w-full bg-transparent border border-red-500 rounded-xl px-4 py-3 placeholder-gray-400 focus:outline-none transition-all duration-300 focus:border-red-400 focus:shadow-lg focus:shadow-red-500/20"
              whileFocus={{ scale: 1.02 }}
            />
          </div>

          <div className="flex flex-col h-full">
            <motion.textarea
              name="mensagem"
              placeholder="Mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              className="flex-grow bg-transparent border border-red-500 rounded-xl px-4 py-3 placeholder-gray-400 focus:outline-none resize-none transition-all duration-300 focus:border-red-400 focus:shadow-lg focus:shadow-red-500/20"
              whileFocus={{ scale: 1.02 }}
              required
            />
            <div className="mt-4 self-end">
              <AnimatedButton
                type="submit"
                className="bg-red-600 hover:bg-red-700 border border-white text-white font-semibold px-6 py-2 rounded-xl disabled:opacity-60 disabled:cursor-not-allowed"
                hoverScale={1.05}
                tapScale={0.95}
                disabled={submitting}
              >
                {submitting ? 'ENVIANDO...' : 'ENVIAR'}
              </AnimatedButton>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContatoSection;
