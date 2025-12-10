function fazerLogin(event) {
        event.preventDefault(); 
        
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        
        
        const padraoEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        
        if (!padraoEmail.test(email)) {
            alert("E-mail inválido!");
            document.getElementById('email').focus(); 
            return;
        }
   
        if (senha.length < 6) {
            alert("Senha muito curta!");
            document.getElementById('senha').focus();
            return; 
        } 
        
        if (email === 'welder@teste.com' && senha === '08011906'){

             Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Aprovado!",
            showConfirmButton: false,
            timer: 2000
             }).then(() => {
    window.location.href = 'home.html'; 
});          
        } else {
           Swal.fire({
            position: "center",
            icon: "error",
            title: "Senha ou Email invalido",
            showConfirmButton: true,
       });
}

}
    
    function loginrede(rede) {
        const btn = document.querySelector('.btn-google');
        btn.innerHTML = "Conectando...";
        btn.style.opacity = "0.7"; 
        
        setTimeout(() => {
        sessionStorage.setItem('usuarioLogado','sim');

        Swal.fire({
        position: "center",
        icon: "success",
        title: "Login com Google aprovado",
        showConfirmButton: false,
        timer: 1500
       }).then(() => {
            window.location.href = 'home.html'; 
        }); 
        }, 1500);
        };