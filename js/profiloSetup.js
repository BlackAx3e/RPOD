const avatarPreview = document.getElementById('avatarPreview');
const fileInput = document.getElementById('profilePicture');

avatarPreview.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      avatarPreview.innerHTML = `<img src="${reader.result}" alt="Avatar" />`;
    };
    reader.readAsDataURL(file);
  }
});

document.getElementById('setup-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const profession = document.getElementById('profession').value;
  const bio = document.getElementById('bio').value;
  const priceRange = document.getElementById('priceRange').value;
  const file = fileInput.files[0];

  if (!file) {
    alert('Seleziona una foto del profilo');
    return;
  }

  const reader = new FileReader();
  reader.onload = function() {
    const user = JSON.parse(localStorage.getItem('user')) || {};
    user.nome = nome;
    user.profession = profession;
    user.bio = bio;
    user.priceRange = priceRange;
    user.profilePicture = reader.result;
    user.profileCreated = true;

    localStorage.setItem('user', JSON.stringify(user));
    window.location.href = 'dashboard.html';
  };
  reader.readAsDataURL(file);
});