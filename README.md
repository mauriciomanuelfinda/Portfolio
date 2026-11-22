# Portfolio — Mauricio Manuel Finda

Portfólio pessoal de Desenvolvedor Web Full Stack, feito com **React + TypeScript + Vite**.

## Correr localmente

```bash
npm install
npm run dev
```

Abre http://localhost:5173/portfolio/

## Editar conteúdo

O site está em português e inglês (selector PT/EN no menu).

- Textos de cada língua (perfil, experiência, projectos, formação, menus): [`src/i18n/pt.ts`](src/i18n/pt.ts) e [`src/i18n/en.ts`](src/i18n/en.ts). Ao alterar um, altere também o outro.
- Contactos, links e stack (ícones): [`src/data.ts`](src/data.ts).
- Cores dos temas claro e escuro: início de [`src/index.css`](src/index.css).

Os ícones vêm do [`react-icons`](https://react-icons.github.io/react-icons/).

## Publicar (Vercel)

A configuração está em [`vercel.ts`](vercel.ts) (pacote `@vercel/config`):

- framework Vite, build com `npm run build` e saída em `dist`;
- o site fica em `/portfolio/` e `/` redirecciona para lá;
- cache longa para os ficheiros em `/portfolio/assets/` e cabeçalhos de segurança.

Basta importar o repositório em https://vercel.com/new — cada push para `main` publica automaticamente.
