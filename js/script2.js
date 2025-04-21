const slider2 = document.querySelector('.slider');
let pos2 = 0;
setInterval(() => {
  pos2 = (pos2 + 300) % (slider2.scrollWidth - slider2.clientWidth);
  slider2.scrollTo({ left: pos2, behavior: 'smooth' });
}, 3500);
// CTA
document.getElementById('actionBtn').addEventListener('click', () => {
  window.location.href = 'html/servizi.html';
});