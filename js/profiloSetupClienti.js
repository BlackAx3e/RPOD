document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('setup-form-clienti');
  const avatarInput = document.getElementById('avatar');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const file = avatarInput.files[0];

    if (!file) {
      alert('Seleziona una foto profilo');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const client = JSON.parse(localStorage.getItem('client')) || {};
      client.nome = nome;
      client.avatar = reader.result;
      client.profileCreated = true;
      localStorage.setItem('client', JSON.stringify(client));
      // Redirect alla pagina servizi
      window.location.href = 'servizi.html';
    };
    reader.readAsDataURL(file);
  });
});