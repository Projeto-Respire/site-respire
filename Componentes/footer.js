export function Footer() {

  return `
    
   <footer>
      <div id="footer_content">
        <div id="footer_logo">
       <img src="/Assets/imagens/logo-branca.png" alt="logo-respire" aria-label="Logo Respire">
       <p>Informações e acolhimento<br>
          ao seu alcance</p>
        </div>
        <ul class="listy">
          <li>
            <h3>Navegação</h3>
          </li>
          <li>
            <a href="/index.html" class="footer-link">Home</a>
          </li>
          <li>
            <a href="/pages/sobre.html" class="footer-link">Sobre</a>
          </li>
          <li>
            <a href="/pages/dicas.html" class="footer-link">Dicas</a>
          </li>
          <li>
            <a href="/pages/Eventos.html" class="footer-link">Eventos</a>
          </li>
          <li>
            <a href="/pages/comunidades.html" class="footer-link">Comunidades</a>
          </li>
          <li>
            <a href="/pages/eventos.html" class="footer-link">Quem somos</a>
          </li>
        </ul>
        <div id="footer_contacts">
          <p>Contatos</p>
          <div id="footer_social_media">
            <a href="/" class="footer-link" id="instagram">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://github.com/Projeto-Respire/.github.git" class="footer-link" id="github" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-github-alt"></i>
            </a>
           <a href="/" class="footer-link" id="linkedin">
             <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div id="footer_subscribe">
            <h3>Envie um E-mail</h3>
            <div id="input_group" class="caixa de email">
              <input type="email" id="email">
              <button>
                <i class="fa-solid fa-envelope"></i>
              </button>
            </div>
        </div>
      </div>
      <div id="footer_copy">
        Copyright: &#169
        2025 Respire. Todos os direitos reservados.
      </div>
  </footer> 
    
  `;
}