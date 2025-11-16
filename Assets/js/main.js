const loadComponent = (id, url) => {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erro ao carregar ${url}: ${response.statusText}`);
      }
      return response.text();
    })
    .then((html) => {
      document.getElementById(id).innerHTML = html;
    })
    .catch((error) => {
      console.error(error);
      document.getElementById(id).innerHTML = `<p>Erro ao carregar componente. Verifique o console.</p>`;
    });
};
document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar-container");
  if (navbarContainer) {
    loadComponent("navbar-container", "../assets/components/navbar.html");
  }

  const footerContainer = document.getElementById("footer-container");
  if (footerContainer) {
    loadComponent("footer-container", "../assets/components/footer.html");
  }
});


////SECTION DE EVENTOS PRA POR EM NOTÍCIAS
const eventosSection = document.querySelector("#eventos-section");

fetch("/pages/eventos.html")
  .then(res => res.text())
  .then(html => {
    const div = document.createElement("div");
    div.innerHTML = html;

    const conteudo = div.querySelector("main");
    areaEventos.innerHTML = conteudo.innerHTML;
  });
