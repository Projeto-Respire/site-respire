export function Footer() {

  return `
    
   <footer>

    <section class="secao-apoio">
    <div class="apoio-texto">
        <h3>Apoio:</h3>
        <p>Projetos que caminham com a gente na missão de tornar o cuidado com a saúde mental mais acessível.</p>
    </div>
    <div class="apoio-banner-logos">
        <a href="https://www.proa.org.br" target="_blank" rel="noopener noreferrer">
        <img src="/assets/imagens/Captura de tela 2025-11-20 194918 1.svg" alt="Logo PROA" class="logo-parceiro"></a>
        <a href="https://www.serasaexperian.com.br" target="_blank" rel="noopener noreferrer">
        <img src="/assets/imagens/Picsart_25-11-20_16-40-55-017.png" alt="Logo Serasa Experian" class="logo-parceiro"></a>

        <img src="/assets/imagens/Picsart_25-11-22_02-11-37-864.png" alt="Logo CalmaMente" class="logo-parceiro">
    </div>

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
            <a href="/pages/voluntarios.html" class="footer-link">Voluntarios</a>
          </li>
          <li>
            <a href="/pages/dicas.html" class="footer-link">Dicas</a>
          </li>
          <li>
            <a href="/pages/noticias.html" class="footer-link">Notícias & Eventos</a>
          </li>
          <li>
            <a href="/pages/quemsomos.html" class="footer-link">Quem somos</a>
          </li>
          <li>
            <a href="/pages/apoiador.html" class="footer-link">Apoiador</a>
          </li>
            <li>
            <a href="/pages/comunidades.html" class="footer-link">Comunidades</a>
          </li>
        </ul>
        <div id="footer_contacts">
          <p>Contatos</p>
          <div id="footer_social_media">
            <a href="https://www.instagram.com/resp.lre?igsh=eWg1ODhwNjhkeXI1" class="footer-link" id="instagram">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://github.com/Projeto-Respire/.github.git" class="footer-link" id="github" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-github-alt"></i>
            </a>
           <a href="https://www.linkedin.com/company/projeto-respire"class="footer-link" id="linkedin">
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