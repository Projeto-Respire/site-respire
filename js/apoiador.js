const botaoSemente = document.querySelector('.semente');

botaoSemente.addEventListener('click', function(event) {
 
    Swal.fire({
        title: "Boas-vindas, Apoiador Semente! 🥳",
        text: "Sua inscrição foi confirmada. Agradecemos por apoiar o projeto! Enviaremos os detalhes de acesso por e-mail.",
        icon: "success",
        confirmButtonText: "Prosseguir",
        confirmButtonColor: "#060191ff"
    });

    
    botaoSemente.style.color = "#ffffff"; 
    botaoSemente.innerText = "Adquirido ✅";
    botaoSemente.style.backgroundColor = "#2ecc71"; 
    botaoSemente.disabled = true; 
});

window.revelar = ScrollReveal({reset:true})

const mediaQuery = window.matchMedia('(min-width: 768px)');

function aplicarLogicaResponsiva (mediaQuery) {
    if (mediaQuery.matches) {

    revelar.reveal('.ajuda',
{
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
})
    console.log("PC ok");

    } else {

    revelar.reveal('.ajuda',
{
    duration: 3000,
    distance: '90px',
    delay: 50,
    reset: false
})
    revelar.reveal('.part2',
{
    duration: 5000,
    distance: '90px',
    viewFactor: 0.1,
    delay: 50,
    reset: false
})

    revelar.reveal('.valores',
{
    duration: 5000,
    distance: '90px',
    viewFactor: 0.1,
    delay: 50,
    reset: false
})

        console.log("Celular Ok");
    }
}
aplicarLogicaResponsiva(mediaQuery);


