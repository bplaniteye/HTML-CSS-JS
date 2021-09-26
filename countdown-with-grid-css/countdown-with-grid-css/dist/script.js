(() => {

  const elCountdown = document.getElementById('countdown-grid');
  if (!elCountdown) return;

  for (let x = 1; x <= 15; x++) {
    for (let y = 1; y <= 9; y++) {
      const template = `<div class="x${x}-y${y}"></div>`;
      elCountdown.insertAdjacentHTML('beforeend', template);
    }
  }

  function startCountDown() {
    let seconds = 3;
    const timer = setInterval(() => {
      console.log(seconds);

      setTimeout(() => {
        elCountdown.classList = ['repaint'];
      }, 1500);

      elCountdown.classList = [];
      elCountdown.classList.add(`number-${seconds}`);
      seconds--;

      if (seconds < 1) {
        seconds = 3;
      }
    }, 3000);
  }

  startCountDown();
})();