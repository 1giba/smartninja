// Configuração central do site: marca, metadados e contato.
// A URL pública é definida em astro.config.mjs (variável SITE_URL).

// E-mail institucional oficial. PUBLIC_CONTACT_EMAIL, se definida, tem precedência.
const contactEmail = (import.meta.env.PUBLIC_CONTACT_EMAIL || 'contato@smartninja.com.br').trim();

export const site = {
  name: 'SmartNinja',
  tagline: 'Tecnologia para quem constrói o futuro.',
  title: 'SmartNinja — Tecnologia para quem constrói o futuro',
  description:
    'A SmartNinja está construindo uma plataforma digital para empresas de tecnologia, startups, polos de inovação e aceleradoras: organizações que constroem e impulsionam negócios de tecnologia.',
  shortDescription:
    'Uma plataforma digital para empresas de tecnologia, startups e organizações que impulsionam a inovação.',
  locale: 'pt-BR',
  ogLocale: 'pt_BR',
  themeColor: '#b7f078',
  ogImage: {
    path: '/og.png',
    width: 1200,
    height: 630,
    alt: 'SmartNinja — Tecnologia para quem constrói o futuro.',
  },
  // Um valor inválido em PUBLIC_CONTACT_EMAIL faz a página não exibir endereço.
  contactEmail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail) ? contactEmail : null,
  nav: [
    { label: 'Visão', href: '/#visao' },
    { label: 'Públicos', href: '/#publicos' },
    { label: 'Plataforma', href: '/#plataforma' },
  ],
} as const;
