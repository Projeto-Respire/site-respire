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