# SmartNinja — site institucional

Landing page institucional da SmartNinja. Projeto frontend estático e independente da plataforma: sem backend, banco de dados ou autenticação.

## Tecnologias

- [Astro](https://astro.build) (saída estática, sem JavaScript no navegador)
- TypeScript
- Tailwind CSS v4 (via plugin do Vite)
- Fontes auto-hospedadas via Fontsource (Bricolage Grotesque, Instrument Sans, IBM Plex Mono)

## Requisitos

- Node.js 20.3 ou superior (desenvolvido com Node 22)
- npm

## Instalação

```sh
npm install
cp .env.example .env   # opcional; veja "Configuração"
```

## Desenvolvimento local

```sh
npm run dev      # http://localhost:4321
npm run check    # verificação de tipos (astro check)
```

## Build

```sh
npm run build    # gera o site em dist/
npm run preview  # serve o build localmente
```

## Estrutura

```
src/
  config/site.ts      marca, metadados, navegação e e-mail de contato
  content/home.ts     todo o texto institucional da página
  styles/global.css   tokens de identidade (cores, fontes) e estilos base
  layouts/            BaseLayout: <head>, SEO, header e footer
  components/         uma seção por componente + Wordmark
  pages/              index, 404 e robots.txt
  assets/smartninja.png   mascote oficial (cópia do original; otimizado para WebP no build)
public/
  favicon.ico           favicon fornecido pelo proprietário
  apple-touch-icon.png  mascote sobre a base creme (180×180)
  og.png                imagem Open Graph (1200×630)
```

A paleta (navy, deep navy, petrol, lime, vanilla e white, mais os tons derivados) e as fontes ficam no bloco `@theme` de `src/styles/global.css`. O mascote é usado em `src/components/Wordmark.astro` (header e footer) e em `src/components/HeroDiagram.astro` (assinatura da base no hero); para trocá-lo, substitua `src/assets/smartninja.png`.

## Configuração

Dois valores dependem de decisões externas e são lidos de variáveis de ambiente, em tempo de build:

| Variável | Uso | Sem valor |
| --- | --- | --- |
| `SITE_URL` | URL pública, sem barra final. Alimenta canonical, `og:url`, `og:image`, sitemap e `robots.txt`. | Canonical, `og:image` e sitemap são omitidos. No Vercel, usa-se o domínio de produção do projeto. |
| `PUBLIC_CONTACT_EMAIL` | Opcional. Substitui o e-mail de contato exibido na seção Contato e no rodapé. | Usa o endereço oficial, `contato@smartninja.com.br`. |

### Contato institucional

O endereço oficial, `contato@smartninja.com.br`, está definido em um único lugar: `src/config/site.ts`. Para trocá-lo, edite esse arquivo ou defina `PUBLIC_CONTACT_EMAIL` no `.env` (local) ou nas variáveis de ambiente do Vercel e gere um novo build.

## Deploy no Vercel

O Vercel detecta projetos Astro automaticamente; não é preciso adaptador nem `vercel.json`.

1. Em vercel.com, crie um projeto importando o repositório `1giba/smartninja`.
2. Mantenha as configurações detectadas (framework Astro, build `npm run build`, saída `dist`).
3. Em **Settings → Environment Variables**, adicione `SITE_URL` quando houver domínio definitivo (e `PUBLIC_CONTACT_EMAIL`, se quiser outro endereço de contato).
4. Faça o deploy. Cada push na branch `main` gera um novo deploy de produção.

## Domínio personalizado

1. No projeto do Vercel, abra **Settings → Domains** e adicione o domínio.
2. Crie no provedor de DNS os registros indicados pelo Vercel.
3. Defina `SITE_URL` com o domínio final (ex.: `https://seudominio.com`) e refaça o deploy, para que canonical, sitemap e `robots.txt` apontem para ele.

## Pendências conhecidas

- O mascote disponível tem 323×323 px. Para telas de alta densidade e usos maiores, substitua `src/assets/smartninja.png` por uma versão em resolução maior ou vetorial.
- `public/og.png` e `public/apple-touch-icon.png` foram gerados a partir do mascote e precisam ser refeitos se a identidade mudar.
