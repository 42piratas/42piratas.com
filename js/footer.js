const $footer = document.querySelector("footer");
const $p = document.createElement("p");
const $a = document.createElement("a");

/* verifica se está na página dos livros */
const isBooks = window.location.pathname.includes("books");
const isPages = window.location.pathname.includes("pages");

/* array com os ícones */
const icons = [
  {
    name: "homepage",
    link: "/",
    target: "_self",
    icon: isBooks
      ? "../../assets/icons/house-solid.svg"
      : isPages
      ? "../assets/icons/house-solid.svg"
      : "assets/icons/house-solid.svg",
  },
  {
    name: "github",
    link: "https://github.com/42piratas",
    icon: isBooks
      ? "../../assets/icons/github.svg"
      : isPages
      ? "../assets/icons/github.svg"
      : "assets/icons/github.svg",
  },
  {
    name: "opensea",
    link: "https://opensea.io/aQ42piratas",
    icon: isBooks
      ? "../../assets/icons/opensea.svg"
      : isPages
      ? "../assets/icons/opensea.svg"
      : "assets/icons/opensea.svg",
  },
  {
    name: "medium",
    link: "https://42piratas.medium.com",
    icon: isBooks
      ? "../../assets/icons/medium.svg"
      : isPages
      ? "../assets/icons/medium.svg"
      : "assets/icons/medium.svg",
  },
  {
    name: "chess",
    link: "https://lichess.org/@/piratas42",
    icon: isBooks
      ? "../../assets/icons/chess.svg"
      : isPages
      ? "../assets/icons/chess.svg"
      : "assets/icons/chess.svg",
  },
  {
    name: "twitter",
    link: "https://twitter.com/42piratas",
    icon: isBooks
      ? "../../assets/icons/twitter.svg"
      : isPages
      ? "../assets/icons/twitter.svg"
      : "assets/icons/twitter.svg",
  },
];

/* parágrafo do footer */
$p.innerHTML =
  "Cheers for dropping by! <a href='https://www.randomgoat.com/' target='_blank'>Have a goat on me.</a>";
$footer.appendChild($p);

/* box com os ícones */
const $boxIcons = document.createElement("div");
$boxIcons.classList.add("box-icons");
$footer.appendChild($boxIcons);

if (isBooks) {
  $footer.style.margin = "1rem";
  $footer.style.borderTop = "none";
  $footer.style.position = "fixed";
  $footer.style.bottom = "0";
  $footer.style.alignItems = "start";
  $p.style.display = "none";
  $boxIcons.style.flexDirection = "column";
}

/* cria os ícones */
icons.forEach((icon) => {
  const $icon = document.createElement("a");
  $icon.setAttribute("href", icon.link);
  $icon.setAttribute("title", icon.name);
  $icon.setAttribute("rel", "noopener noreferrer");
  $icon.setAttribute("target", icon.target); // _blank or _self
  $icon.innerHTML = `<img src="${icon.icon}" alt="${icon.name}" />`;
  $boxIcons.appendChild($icon);
});
