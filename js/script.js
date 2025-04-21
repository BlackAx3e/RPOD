document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const panels = document.querySelectorAll('.panel');

  panels.forEach(panel => {
    panel.addEventListener('click', () => {
      const side = panel.dataset.side;
      // se già attivo, rimuove; altrimenti imposta lo stato attivo
      if (container.dataset.active === side) {
        container.removeAttribute('data-active');
      } else {
        container.dataset.active = side;
      }
    });
  });
});
