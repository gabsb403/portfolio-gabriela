const temaSalvo = localStorage.getItem('tema');
 if (temaSalvo === 'light') {
  document.documentElement.setAttribute('data-theme', temaSalvo);
 }

document.getElementById('theme-toggle').addEventListener('click', function() {
  const botao = document.getElementById('theme-toggle');
  
  if (document.documentElement.getAttribute('data-theme') === 'light') {
    document.documentElement.removeAttribute('data-theme');
    botao.textContent = '🌙';
     localStorage.setItem('tema', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    botao.textContent = '☀️';
    localStorage.setItem('tema', 'light')
  }
});


const texto = "Desenvolvedora Front-End";
const elemento = document.getElementById("profissao");
elemento.textContent = "";
let i = 0;

const intervalo = setInterval(function() {
  elemento.textContent += texto[i];
  i++;
  if (i >= texto.length) {
    clearInterval(intervalo);
  }
}, 100);