/* verifica se tem algum parametro na url */
// const soundClick = require("../assets/sounds/sound_click.wav");

document.querySelectorAll("a").forEach((sl) => {
  const audio1 = document.createElement("audio");
  audio1.preload = "auto";
  audio1.volume = "0.1";
  audio1.innerHTML = isBooks
    ? `<source src="../assets/sounds/sound_hover.wav"; type="audio/wav">`
    : isPages
    ? `<source src="../assets/sounds/sound_hover.wav"; type="audio/wav">`
    : `<source src="assets/sounds/sound_hover.wav"; type="audio/wav">`;

  const audio2 = document.createElement("audio");
  audio2.preload = "auto";
  audio2.volume = "0.1";
  audio2.innerHTML = isBooks
    ? `<source src="../assets/sounds/sound_click.wav"; type="audio/wav">`
    : isPages
    ? `<source src="../assets/sounds/sound_click.wav"; type="audio/wav">`
    : `<source src="assets/sounds/sound_click.wav"; type="audio/wav">`;

  document.body.appendChild(audio1);
  document.body.appendChild(audio2);

  sl.addEventListener("mouseenter", async (event) => {
    audio1.currentTime = 0;
    try {
      await audio1.play();
    } catch (error) {
      console.log("User interaction needed");
    }
  });

  sl.addEventListener("click", () => {
    audio2.currentTime = 0;
    try {
      audio2.play();
    } catch (error) {
      console.log("User interaction needed");
    }
  });
});
