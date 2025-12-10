const botaoSemente = document.querySelector('.semente');

botaoSemente.addEventListener('click', function(event) {
 
    //ALERTA
    Swal.fire({
        title: "Boas-vindas, Apoiador Semente! 🥳",
        text: "Sua inscrição foi confirmada. Agradecemos por apoiar o projeto! use o cupom RAIZ10 e receba 10% de desconto no plano Apoiador Raiz. Enviaremos mais detalher por e-mail.",
        icon: "success",
        confirmButtonText: "Prosseguir",
        confirmButtonColor: "#060191ff"
    });

    //TROCA DESIGN
    botaoSemente.style.color = "#ffffff"; 
    botaoSemente.innerText = "Adquirido ✅";
    botaoSemente.style.backgroundColor = "#2ecc71"; 
    botaoSemente.disabled = true; 
});



//REVELACAO DE CARDS
window.revelar = ScrollReveal({reset:true})


    revelar.reveal('.ajuda',{
    duration: 3000,
    distance: '90px',
    delay: 400,
    reset: false
})
    revelar.reveal('.part2',
{
    duration: 5000,
    distance: '90px',
    viewFactor: 0.1,
    delay: 1500,
    reset: false
})

    revelar.reveal('.valores',
{
    duration: 5000,
    distance: '90px',
    viewFactor: 0.3,
    delay: 600,
    reset: false
});



