document.getElementById("create-account-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Verifica che le password corrispondano
  if (password !== confirmPassword) {
    alert("Le password non corrispondono!");
    return;
  }

  // Crea un oggetto utente
  const newUser = {
    email: email,
    password: password,
    profileCreated: false // Flag per verificare se il profilo è stato completato
  };

  // Salva l'utente nel localStorage
  localStorage.setItem("user", JSON.stringify(newUser));

  // Reindirizza all'impostazione del profilo
  window.location.href = "profiloSetup.html";
});
