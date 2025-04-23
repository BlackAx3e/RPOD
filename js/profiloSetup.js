document.addEventListener('DOMContentLoaded', () => {
  const avatarPreview = document.getElementById('avatarPreview');
  const fileInput = document.getElementById('profilePicture');
  const form = document.getElementById('setup-form');

  // Anteprima avatar
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

  // Submit form
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Prendo i campi
    const nomeEl = document.getElementById('nome');
    const professionEl = document.getElementById('profession');
    const bioEl = document.getElementById('bio');
    const priceEl = document.getElementById('priceRange');

    if (!nomeEl || !professionEl || !bioEl || !priceEl) {
      console.error('Elementi del form mancanti');
      return;
    }

    const nome = nomeEl.value;
    const profession = professionEl.value;
    const bio = bioEl.value;
    const priceRange = priceEl.value;
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
});