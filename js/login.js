// login.js
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Blocca l'invio predefinito del form

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Recupera i dati salvati nel localStorage (se esistono)
  const storedUser = JSON.parse(localStorage.getItem("user"));

  // Verifica se le credenziali corrispondono
  if (storedUser && storedUser.email === email && storedUser.password === password) {
    // Redirigi alla dashboard
    window.location.href = "dashboard.html";  // Cambia il percorso se necessario
  } else {
    alert("Credenziali errate.");
  }
});
