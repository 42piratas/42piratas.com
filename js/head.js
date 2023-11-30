// caminho-para-o-seu-arquivo-head.js
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
