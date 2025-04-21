window.onload = function() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.profileCreated) {
    // Mostra i dati del profilo
    document.getElementById("username").textContent = user.nome || "Professionista";
    document.getElementById("nome").textContent = user.nome || "Nome non impostato";
    document.getElementById("profession").textContent = user.profession || "Professione non impostata";
    document.getElementById("bio").textContent = user.bio || "Bio non impostata";
    // Puoi aggiungere la foto del profilo, se presente
    document.getElementById("profilePicture").src = user.profilePicture || "";
  }
};

// Funzione per il logout
document.getElementById("logout").addEventListener("click", function() {
  // Rimuovi i dati dell'utente dal localStorage
  localStorage.removeItem("user");
  // Redirigi alla pagina di login
  window.location.href = "login.html";
});
