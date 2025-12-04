
function criarConta(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;


    const Pnome = /^[a-zA-ZÀ-ÿ\s]{2,50}$/;
    if (!Pnome.test(nome)) {
        alert("Por favor, digite um nome válido");
        document.getElementById('nome').focus();
        return; 
    }

    const padraoEmail = /^[a-zA-Z][a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!padraoEmail.test(email)) {
        alert("Por favor, digite um e-mail válido (ex: nome@gmail.com)");
        document.getElementById('email').focus(); 
        return;
    }

    if (senha.length < 6) {
        alert("A senha precisa ter pelo menos 6 caracteres");
        document.getElementById('senha').focus();
        return; 
    } 

    alert("Conta criada com sucesso! Você já está logado. Redirecionando...");

    sessionStorage.setItem('usuarioLogado', 'sim');

    window.location.href = '../../index.html';
}

function loginrede(rede) {
 
    const btn = document.querySelector('.btn-' + rede)
    
    btn.innerHTML = "Conectando...";
    btn.style.opacity = "0.7"; 

    setTimeout(() => {

        sessionStorage.setItem('usuarioLogado','sim')
        alert("Login com " + rede + " Aprovado!");
        window.location.href = '../../index.html'; 
    }, 1500);
}