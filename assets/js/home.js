const stat = document.querySelector('[data-count]');

if (stat) {
  const target = Number(stat.dataset.count);
  let current = 0;
  const tick = () => {
    current += 1;
    stat.textContent = `${current}+`;
    if (current < target) {
      window.setTimeout(tick, 55);
    }
  };
  tick();
}
