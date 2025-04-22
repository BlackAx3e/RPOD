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
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Usa FormData per recuperare valori
    const formData = new FormData(form);
    const nome = formData.get('nome');
    const profession = formData.get('profession');
    const bio = formData.get('bio');
    const file = formData.get('profilePicture');

    // Validazione campi
    if (!nome || !profession || !bio) {
      alert('Per favore, compila tutti i campi.');
      return;
    }
    if (!(file instanceof File) || file.size === 0) {
      alert('Seleziona una foto del profilo.');
      return;
    }

    // Leggi immagine come base64 e salva
    const reader = new FileReader();
    reader.onload = () => {
      const user = JSON.parse(localStorage.getItem('user')) || {};
      user.nome = nome;
      user.profession = profession;
      user.bio = bio;
      user.profilePicture = reader.result;
      user.profileCreated = true;

      localStorage.setItem('user', JSON.stringify(user));
      window.location.href = 'dashboard.html';
    };
    reader.readAsDataURL(file);
  });
});