// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// URL pública do site. Depende do domínio final: defina SITE_URL no ambiente
// (ex.: https://seudominio.com). No Vercel, na ausência de SITE_URL, usa-se o
// domínio de produção do projeto. Sem URL, canonical e sitemap são omitidos.
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site = process.env.SITE_URL || (vercelHost ? `https://${vercelHost}` : undefined);

export default defineConfig({
  site,
  // Com o formato de build padrão (pasta/index.html), as rotas terminam em
  // barra; canonical e sitemap seguem a mesma regra.
  trailingSlash: 'always',
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
