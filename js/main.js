
// btn

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






//Vlibras

document.addEventListener('DOMContentLoaded', function() {
    const divWidget = document.createElement('div');
    divWidget.innerHTML = `
        <div vw class="enabled">
            <div vw-access-button class="active"></div>
            <div vw-plugin-wrapper>
                <div class="vw-plugin-top-wrapper"></div>
            </div>
        </div>
    `;    
    document.body.appendChild(divWidget);
    const script = document.createElement('script');
    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
    script.onload = function() {
        new window.VLibras.Widget('https://vlibras.gov.br/app');
    };
    document.body.appendChild(script);
});
