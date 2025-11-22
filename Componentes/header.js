export function Header() {
  return ` 
  <header id="header">
    <div class="tipografia">
      <img src="/Assets/imagens/respire-tipografia.png" alt="respire-logo-tipografia">
    </div>
  <nav id="nav">
    <button aria-label="Abrir Menu" id="mobo-btn" aria-haspopup="true" aria-controls="menu" aria-expanded="false">Menu
      <span id="hamburger"></span>
    </button>
    <ul id="menu" role="menu">
      <li><a href="/index.html">Home</a></li>
      <li><a href="/sobre.html">Quem somos</a></li>
      <li><a href="/pages/sintomas.html">Sintomas</a></li>
      <li><a href="/pages/dicas.html">Dicas</a></li>
      <li><a href="/pages/noticias.html">Notícias</a></li>
    </ul>
  </nav>
<header>
  `;
}