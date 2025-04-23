document.addEventListener('DOMContentLoaded', () => {
  const client = JSON.parse(localStorage.getItem('client'));
  const avatar = document.getElementById('client-avatar');
  const name = document.getElementById('client-name');

  if (client && client.profileCreated) {
    if (client.avatar) avatar.src = client.avatar;
    if (client.nome) name.textContent = client.nome;
  } else {
    // Optional: redirect se l'utente non ha completato il profilo
    window.location.href = "loginClienti.html";
  }
});
