
let titulo = document.querySelector('.container h1');
const data = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const dataAtual = data.toLocaleDateString('pt-BR', options);
const hora = data.getHours();
const minuto = data.getMinutes();
titulo.innerHTML = `${dataAtual}<br>${hora >= 10 ? hora : '0' + hora}:${minuto < 10 ? '0' + minuto : minuto}`
