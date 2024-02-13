// export function typeWrite(elemento) {
//   const textoArray = elemento.innerHTML.split("");
//   elemento.innerHTML = " ";
//   textoArray.forEach(function (letra, i) {
//     setTimeout(function () {
//       elemento.innerHTML += letra;
//       const audio = new Audio("/src/assets/audio/keyboard.mp3");
//       console.log("Working?");
//       audio.play();
//     }, 75 * i);
//   });
// }

let audioPlayed = false; // флаг для отслеживания воспроизведения аудио

export function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = " ";
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerHTML += letra;
      if (!audioPlayed) {
        // если аудио еще не было воспроизведено
        const audio = new Audio("/src/assets/audio/keyboard.mp3");
        // audio.play();
        audioPlayed = true; // устанавливаем флаг, что аудио было воспроизведено
      }
    }, 55 * i);
  });
}
