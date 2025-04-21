const slider = document.querySelector('.slider');
let pos = 0;
setInterval(() => {
  pos = (pos + 300) % (slider.scrollWidth - slider.clientWidth);
  slider.scrollTo({ left: pos, behavior: 'smooth' });
}, 3500);
// CTA
document.getElementById('actionBtn').addEventListener('click', () => {
  window.location.href = 'html/dashboard.html';
});