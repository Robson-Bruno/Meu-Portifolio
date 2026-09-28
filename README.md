# Portfólio — Robson Bruno

Projeto responsivo em HTML, JavaScript, Vite e Sass (SCSS).

## Abrir no VS Code

1. Abra a pasta `portfolio-robson` no VS Code.
2. Abra o terminal integrado (`Ctrl + crase`).
3. Execute `npm install` e depois `npm run dev`.
4. Abra o endereço local indicado no terminal (normalmente `http://localhost:5173`).

Para gerar uma versão de produção, execute `npm run build`. Os arquivos finais ficarão em `dist/`.

## Estrutura

```text
portfolio-robson/
├── public/
│   └── favicon.svg
├── src/
│   ├── styles/
│   │   └── main.scss
│   └── main.js
├── index.html
├── package.json
└── README.md
```

## Personalizar

- Textos, links e projetos: `src/main.js` (adicione entradas ao array `projects`).
- Cores, espaçamentos e estilos responsivos: `src/styles/main.scss`.
- Título e descrição para mecanismos de busca: `index.html`.
- O projeto CrediControl aparece como conceito em desenvolvimento; adicione o link real em `url` quando estiver disponível.
