
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

  async function carregarEventos() {
    try {
        const container = document.getElementById("eventos-container");

        if (!container) {
            return;
        }
        const resp = await fetch("./eventos.html");
        const html = await resp.text();
        container.innerHTML = html;
        const script = document.createElement('script');
        script.src = "/assets/js/eventos.js"; 
        document.body.appendChild(script); 

    } catch (erro) {
        console.error("Erro ao carregar eventos:", erro);
    }
}

carregarEventos();
