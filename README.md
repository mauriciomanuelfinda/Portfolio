# Portfolio — Mauricio Manuel Finda

Portfólio pessoal de Desenvolvedor Web Full Stack, feito com **React + TypeScript + Vite**.

🔗 https://mauriciomanuelfinda.github.io/portfolio

## Correr localmente

```bash
npm install
npm run dev
```

Abre http://localhost:5173/portfolio/

## Editar conteúdo

Todos os dados (perfil, stack, experiência, projectos, formação) estão em [`src/data.ts`](src/data.ts).
Os ícones vêm do [`react-icons`](https://react-icons.github.io/react-icons/).

## Publicar

O workflow em `.github/workflows/deploy.yml` faz build e publica no GitHub Pages a cada push para `main`.
No repositório, em **Settings → Pages → Source**, escolhe **GitHub Actions**.
