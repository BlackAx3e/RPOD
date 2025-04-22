// Toggle overlay menu on mobile
const toggleBtn = document.getElementById('toggleBtn');
const overlayMenu = document.getElementById('overlayMenu');
const closeBtn = document.getElementById('closeBtn');

toggleBtn.addEventListener('click', () => {
  overlayMenu.classList.add('open');
});
closeBtn.addEventListener('click', () => {
  overlayMenu.classList.remove('open');
});

// Caricamento dati utente da localStorage
document.addEventListener('DOMContentLoaded', function () {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || !user.profileCreated) {
    window.location.href = "login.html";
    return;
  }

  document.getElementById("user-avatar").src = user.profilePicture;
  document.getElementById("user-name").textContent = user.nome;
  document.getElementById("user-bio").textContent = user.bio;
});