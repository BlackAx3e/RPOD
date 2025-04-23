document.getElementById('crea-account-clienti-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  if (password !== confirmPassword) {
    alert('Le password non corrispondono!');
    return;
  }
  const client = { email, password, profileCreated: false };
  localStorage.setItem('client', JSON.stringify(client));
  window.location.href = 'profiloSetupClienti.html';
});