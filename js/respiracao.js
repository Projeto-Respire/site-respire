document.addEventListener("DOMContentLoaded", () => {
  const circle = document.querySelector(".circle");
  const breathText = circle; 
  const timerText = document.querySelector(".timer");

  circle.addEventListener("click", () => {
    let time = 10;

    circle.style.pointerEvents = "none";

    breathText.textContent = "INSPIRE";
    timerText.textContent = `${time} segundos`;

    const interval = setInterval(() => {
      time--;
      timerText.textContent = `${time} segundos`;

      if (time === 5) {
        breathText.textContent = "EXPIRE";
      }

      if (time <= 0) {
        clearInterval(interval);

        timerText.textContent = "10 segundos";
        breathText.textContent = "INSPIRE";
        circle.style.pointerEvents = "auto";
      }
    }, 1000);
  });
});
