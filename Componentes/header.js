export function Header() {
  return ` 
  <header id="header">
    <div class="tipografia">
      <img src="/Assets/imagens/RESPIRE.png" alt="respire-logo-tipografia">
    </div>
  <nav id="nav">
    <button aria-label="Abrir Menu" id="mobo-btn" aria-haspopup="true" aria-controls="menu" aria-expanded="false">Menu
      <span id="hamburger"></span>
    </button>
    <ul id="menu" role="menu">
      <li><a href="/index.html">Home</a></li>
      <li><a href="/pages/noticias.html">Sobre</a></li>
      <li><a href="/pages/sintomas">Sintomas</a></li>
      <li><a href="/pages/dicas">Dicas</a></li>
      <li><a href="/pages/eventos">Eventos</a></li>
      <li><a href="/pages/voluntarios">Voluntarios</a></li>
      <li><a href="/pages/comunidades">Comunidades</a></li>
    </ul>
  </nav>
<header>
  `;
}