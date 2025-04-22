document.getElementById("setup-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const profession = document.getElementById("profession").value;
  const bio = document.getElementById("bio").value;
  const priceRange = document.getElementById("priceRange").value;
  const file = document.getElementById("profilePicture").files[0];

  const reader = new FileReader();
  reader.onload = function () {
    const imageBase64 = reader.result;

    const user = JSON.parse(localStorage.getItem("user"));
    user.nome = nome;
    user.profession = profession;
    user.bio = bio;
    user.priceRange = priceRange;
    user.profilePicture = imageBase64; // Salviamo l'immagine
    user.profileCreated = true;

    localStorage.setItem("user", JSON.stringify(user));

    window.location.href = "dashboard.html";
  };

  if (file) {
    reader.readAsDataURL(file); // converte in base64
  } else {
    alert("Carica una foto profilo!");
  }
});
