const botaoSemente = document.querySelector('.botao');

botaoSemente.addEventListener('click', function(event) {
 
    Swal.fire({
        title: "Sua inscrição foi confirmada! 🥳",
        text: "Agradecemos por parcticipar do nosso evento! Enviaremos os detalhes por e-mail.",
        icon: "success",
        confirmButtonText: "Prosseguir",
        confirmButtonColor: "#060191ff"
    });

    
    botaoSemente.style.color = "#ffffff"; 
    botaoSemente.innerText = "Adquirido ✅";
    botaoSemente.style.backgroundColor = "#2ecc71"; 
    botaoSemente.disabled = false; 
});