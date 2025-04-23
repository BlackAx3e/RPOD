document.getElementById('login-clienti-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const storedClient = JSON.parse(localStorage.getItem('client'));
  if (storedClient && storedClient.email === email && storedClient.password === password) {
    window.location.href = 'contattiVenditori.html';
  } else {
    alert('Credenziali errate.');
  }
});