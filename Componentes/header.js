export function Header() {
  return ` 
  <header id="header">
    <div class="tipografia">
     <a href="/index.html"><img src="/Assets/imagens/respire-tipografia.png" alt="respire-logo-tipografia"></a>
    </div>
  <nav id="nav">
    <button aria-label="Abrir Menu" id="mobo-btn" aria-haspopup="true" aria-controls="menu" aria-expanded="false">Menu
      <span id="hamburger"></span>
    </button>
    <ul id="menu" role="menu">
      <li><a href="/index.html">Home</a></li>
      <li><a href="/pages/voluntarios.html">Voluntarios</a></li>
      <li><a href="/pages/dicas.html">Dicas</a></li>
      <li><a href="/pages/noticias.html">Notícias & Eventos</a></li>
      <li><a href="/pages/comunidades.html">Comunidades</a></li>
      <li><a href="../Pages/quemsomos.html">Quem somos</a></li>
      <li><a href="../Pages/apoiador.html">Apoiador</a></li>
    </ul>
  </nav>
<header>
  `;
}