document.getElementById('theme-toggle').addEventListener('click', function() {
  const botao = document.getElementById('theme-toggle');
  
  if (document.documentElement.getAttribute('data-theme') === 'light') {
    document.documentElement.removeAttribute('data-theme');
    botao.textContent = '🌙';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    botao.textContent = '☀️';
  }
});