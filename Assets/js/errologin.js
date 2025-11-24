
const botoesInscricao = document.querySelectorAll('.botao');


botoesInscricao.forEach(botao => {
    
    botao.addEventListener('click', function(event) {
        
        const estaLogado = localStorage.getItem('usuarioLogado');

        if (estaLogado) {

            
            alert("Inscrição confirmada! 🎉\nTe enviamos um e-mail com os detalhes.");
            
            botao.innerText = "Inscrito ✅";
            botao.style.backgroundColor = "#2ecc71"; 
            botao.disabled = true; 

        } else {
            const irParaLogin = confirm("Você precisa estar logado para se inscrever.\Por favor faça o login");
            
            if (irParaLogin) {
                window.location.href = '../../Pages/login.html';
            }
        }
    });
});