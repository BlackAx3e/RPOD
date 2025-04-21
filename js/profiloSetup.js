document.getElementById("setup-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const profession = document.getElementById("profession").value;
  const bio = document.getElementById("bio").value;
  const priceRange = document.getElementById("priceRange").value;

  // Aggiungi i dati al profilo dell'utente
  const user = JSON.parse(localStorage.getItem("user"));
  user.nome = nome;
  user.profession = profession;
  user.bio = bio;
  user.priceRange = priceRange;
  user.profileCreated = true;

  // Salva di nuovo l'utente nel localStorage
  localStorage.setItem("user", JSON.stringify(user));

  // Reindirizza alla dashboard
  window.location.href = "dashboard.html";
});
