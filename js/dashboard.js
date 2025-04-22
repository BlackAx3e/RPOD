// Toggle sidebar on mobile
const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

// Placeholder per dinamiche future
// Esempio: aggiornamento dati delle card via fetch API
/*
fetch('/api/stats')
  .then(res => res.json())
  .then(data => {
    document.querySelector('.card .value').textContent = data.earnings;
    // ... altra logica
  })
  .catch(err => console.error(err));
*/
document.addEventListener("DOMContentLoaded", function () {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || !user.profileCreated) {
    window.location.href = "login.html";
    return;
  }

  document.getElementById("user-avatar").src = user.profilePicture;
  document.getElementById("user-name").textContent = user.nome;
  document.getElementById("user-bio").textContent = user.bio;
});
