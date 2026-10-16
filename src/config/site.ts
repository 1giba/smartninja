// Configuração central do site: marca, metadados e contato.
// A URL pública é definida em astro.config.mjs (variável SITE_URL).

// E-mail institucional oficial. PUBLIC_CONTACT_EMAIL, se definida, tem precedência.
const contactEmail = (import.meta.env.PUBLIC_CONTACT_EMAIL || 'contato@smartninja.com.br').trim();

export const site = {
  name: 'SmartNinja',
  tagline: 'Tecnologia para quem constrói o futuro.',
  title: 'SmartNinja — Billing e assinaturas para SaaS',
  description:
    'Estamos construindo uma infraestrutura de billing para SaaS brasileiros, com assinaturas, pagamentos recorrentes e APIs. Conheça nossa proposta.',
  shortDescription:
    'Infraestrutura de billing e assinaturas para SaaS brasileiros, em construção.',
  locale: 'pt-BR',
  ogLocale: 'pt_BR',
  themeColor: '#b7f078',
  ogImage: {
    path: '/og.png',
    width: 1200,
    height: 630,
    alt: 'SmartNinja: billing e assinaturas para SaaS brasileiros. Infraestrutura em construção.',
  },
  // Ícone quadrado (≥ 48 px) para buscadores; também é o logo do JSON-LD.
  icon: {
    path: '/icon-192.png',
    width: 192,
    height: 192,
  },
  // Um valor inválido em PUBLIC_CONTACT_EMAIL faz a página não exibir endereço.
  contactEmail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail) ? contactEmail : null,
  nav: [
    { label: 'Visão', href: '/#visao' },
    { label: 'Públicos', href: '/#publicos' },
    { label: 'Plataforma', href: '/#plataforma' },
  ],
} as const;
