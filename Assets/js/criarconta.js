function fazerLogin(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    

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

     const Pnome = /^[a-zA-ZÀ-ÿ\s]{2,50}$/;
    if (!Pnome.test(nome)) {
        alert("Por favor, digite um nome válido");
        document.getElementById('nome').focus();
        return; 
    }

    localStorage.setItem('usuarioLogado', gerarToken());
    localStorage.setItem('EmailUsuario', email);
    localStorage.setItem('SenhaUsuario', senha);
    


    alert("Dados validados! Redirecionando... 🚀");
    

    window.location.href = '../../index.html';
}

function loginrede(rede) {
 
    const btn = document.querySelector('.btn-' + rede)
    
    btn.innerHTML = "Conectando...";
    btn.style.opacity = "0.7"; 

    setTimeout(() => {
      
        localStorage.setItem('usuarioLogado', gerarToken());
        localStorage.setItem('nomeUsuario', 'Dev');

        alert("Login com " + rede + " Aprovado!");
        window.location.href = '../../index.html'; 
    }, 1500);
}

function gerarToken() {
    return Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);
}
