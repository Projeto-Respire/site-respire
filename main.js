// // main.js


// console.log("A tentar importar header.js e footer.js...");
// import { Header } from './Componentes/header.js';
// import { Footer } from './Componentes/footer.js';


// document.addEventListener("DOMContentLoaded", () => {
  
//   console.log("DOM carregado. A procurar placeholders...");

 
//   const headerElement = document.getElementById('header-root');
//   const footerElement = document.getElementById('footer-root');


//   if (headerElement) {
//     console.log("Encontrei 'header-root', a injetar Header...");
//     headerElement.innerHTML = Header(); 
//   } else {
//     console.error("ERRO: Não encontrei o placeholder 'header-root'"); 
//   }

//   if (footerElement) {
//     console.log("Encontrei 'footer-root', a injetar Footer...");
//     footerElement.innerHTML = Footer();
//   } else {
//     console.error("ERRO: Não encontrei o placeholder 'footer-root'");
//   }
  
// });

import { Header } from './Componentes/header.js';
import { Footer } from './Componentes/footer.js';

document.addEventListener("DOMContentLoaded", () => {

  const headerElement = document.getElementById('header-root');
  const footerElement = document.getElementById('footer-root');

  if (headerElement) {
    headerElement.innerHTML = Header(); 
  }
  if (footerElement) {
    footerElement.innerHTML = Footer();
  }
  const btnMobile = document.getElementById('mobo-btn');
  const nav = document.getElementById('nav');

  function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    nav.classList.toggle('ativar'); // A tua classe é 'ativar'
    const menuAtivo = nav.classList.contains('ativar');
    event.currentTarget.setAttribute('aria-expanded', menuAtivo);
    if (menuAtivo) {
      event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
      event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
  }

  if (btnMobile && nav) {
    btnMobile.addEventListener('click', toggleMenu);
    btnMobile.addEventListener('touchstart', toggleMenu);
  } else {
    console.warn("Aviso: Elementos (mobo-btn ou nav) ainda não encontrados.");
  }
  
});