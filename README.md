# Portfolio — Mauricio Manuel Finda

Portfólio pessoal de Desenvolvedor Web Full Stack, feito com **React + TypeScript + Vite**.

## Correr localmente

```bash
npm install
npm run dev
```

Abre http://localhost:5173/portfolio/

## Editar conteúdo

Todos os dados (perfil, stack, experiência, projectos, formação) estão em [`src/data.ts`](src/data.ts).
Os ícones vêm do [`react-icons`](https://react-icons.github.io/react-icons/).

## Publicar (Vercel)

A configuração está em [`vercel.ts`](vercel.ts) (pacote `@vercel/config`):

- framework Vite, build com `npm run build` e saída em `dist`;
- o site fica em `/portfolio/` e `/` redirecciona para lá;
- cache longa para os ficheiros em `/portfolio/assets/` e cabeçalhos de segurança.

Basta importar o repositório em https://vercel.com/new — cada push para `main` publica automaticamente.
