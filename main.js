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
    nav.classList.toggle('ativar'); 
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

// // ADD DE EVENTOS DENTRO DE NOTÍCIAS
// async function carregarEventos() {
//   try {
//     const resp = await fetch("./eventos.html");
//     const html = await resp.text();

//     document.getElementById("eventos-container").innerHTML = html;
//   } catch (erro) {
//     console.error("Erro ao carregar eventos:", erro);
//   }
// }

// carregarEventos();

// // ADD DE EVENTOS DENTRO DE NOTÍCIAS & Conometro
async function carregarEventos() {
    try {
        const container = document.getElementById("eventos-container");
        if (!container) {
            return;
        }
        const resp = await fetch("./eventos.html");
        const html = await resp.text()
        container.innerHTML = html;
        const script = document.createElement('script');
        script.src = "/assets/js/eventos.js"; 
        document.body.appendChild(script); 

    } catch (erro) {
        console.error("Erro ao carregar eventos:", erro);
    }
}

carregarEventos();
