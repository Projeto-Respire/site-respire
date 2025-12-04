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

    if (email === 'aluno@teste.com' && senha === 'senha123') {
        alert("Login Aprovado! Redirecionando...");
        window.location.href = '../../index.html'; 
    } else {

        alert("E-mail ou senha inválidos!");
    }
}

function loginrede(rede) {
 
    const btn = document.querySelector('.btn-' + rede)
    
    btn.innerHTML = "Conectando...";
    btn.style.opacity = "0.7"; 

    setTimeout(() => {

        alert("Login com " + rede + " Aprovado!");
        window.location.href = '../../index.html'; 
    }, 1500);
}
