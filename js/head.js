/* // caminho-para-o-seu-arquivo-head.js
document.addEventListener("DOMContentLoaded", function () {
  const head = document.querySelector("head");

  // Use fetch para carregar o conteúdo do head.html
  fetch("assets/head/headMetaData.html")
    .then((response) => response.text())
    .then((html) => {
      // Insira o conteúdo do head.html no head da página atual
      head.insertAdjacentHTML("afterbegin", html);
    });
});
 */
// Create metadata elements
const charsetMeta = document.createElement("meta");
charsetMeta.setAttribute("charset", "UTF-8");

const viewportMeta = document.createElement("meta");
viewportMeta.setAttribute("name", "viewport");
viewportMeta.setAttribute("content", "width=device-width, initial-scale=1.0");

const authorMeta = document.createElement("meta");
authorMeta.setAttribute("name", "author");
authorMeta.setAttribute(
  "content",
  "Thiago Braga - Desenvolvedor Web - https://devthiagobraga.com.br"
);

const descriptionMeta = document.createElement("meta");
descriptionMeta.setAttribute("name", "description");
descriptionMeta.setAttribute(
  "content",
  `Ânderson Quadros has been proudly helping to build the Decentralized Internet and a 
    Better Home of Mind at the AKASHA Foundation. He also actively contributes to multiple social initiatives, 
    besides teaching, writing, and crafting a few things.`
);

const keywordsMeta = document.createElement("meta");
keywordsMeta.setAttribute("name", "keywords");
keywordsMeta.setAttribute(
  "content",
  "Ânderson Quadros, Anderson Quadros, Anderson Quadros Piratas, Anderson Quadros 42 Piratas"
);

const robotsMeta = document.createElement("meta");
robotsMeta.setAttribute("name", "robots");
robotsMeta.setAttribute("content", "index, follow");

const ogTypeMeta = document.createElement("meta");
ogTypeMeta.setAttribute("property", "og:type");
ogTypeMeta.setAttribute("content", "website");

const ogUrlMeta = document.createElement("meta");
ogUrlMeta.setAttribute("property", "og:url");
ogUrlMeta.setAttribute("content", "https://42piratas.com/");

const ogTitleMeta = document.createElement("meta");
ogTitleMeta.setAttribute("property", "og:title");
ogTitleMeta.setAttribute("content", "Ânderson Quadros - 42 Piratas");

const ogDescriptionMeta = document.createElement("meta");
ogDescriptionMeta.setAttribute("property", "og:description");
ogDescriptionMeta.setAttribute(
  "content",
  "Ânderson Quadros has been proudly helping to build the Decentralized Internet and a Better Home of Mind at the AKASHA Foundation. He also actively contributes to multiple social initiatives, besides teaching, writing, and crafting a few things."
);

// Append metadata elements to the head of the document
document.head.appendChild(charsetMeta);
document.head.appendChild(viewportMeta);
document.head.appendChild(authorMeta);
document.head.appendChild(descriptionMeta);
document.head.appendChild(keywordsMeta);
document.head.appendChild(robotsMeta);
document.head.appendChild(ogTypeMeta);
document.head.appendChild(ogUrlMeta);
document.head.appendChild(ogTitleMeta);
document.head.appendChild(ogDescriptionMeta);
