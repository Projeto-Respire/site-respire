function fazerLogin(event) {
    event.preventDefault(); 

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
    
    localStorage.setItem('usuarioLogado', 'sim');
    
    localStorage.setItem('nomeUsuario', email); 

    alert("Login Aprovado! Redirecionando...");
    
    window.location.href = '../../index.html'; 
}

function loginrede(rede) {
 
    const btn = document.querySelector('.btn-' + rede)
    
    btn.innerHTML = "Conectando...";
    btn.style.opacity = "0.7"; 

    setTimeout(() => {
      
        localStorage.setItem('usuarioLogado', 'sim');
        

        localStorage.setItem('nomeUsuario', 'Usuário ' + rede);

        alert("Login com " + rede + " Aprovado!");
        window.location.href = '../../index.html'; 
    }, 1500);
}

