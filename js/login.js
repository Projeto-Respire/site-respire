function fazerLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (senha.length < 6) {
        Swal.fire({
            position: "center",
            icon: "warning",
            title: "Senha deve ter no mínimo 6 caracteres",
            showConfirmButton: true
        });
    }

    if (email === 'welder@teste.com' && senha === '08011906') {

        sessionStorage.setItem('usuarioLogado', 'sim');

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Aprovado!",
            showConfirmButton: true,
            timer: 2000
        }).then(() => {
            window.location.href = 'home.html';
        });

    } else {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Senha ou Email inválido",
            showConfirmButton: true
        });
    }
}

function loginrede(rede) {
    const btn = document.querySelector('.btn-google');
        btn.innerHTML = "Conectando...";
        btn.style.opacity = "0.7";

    setTimeout(() => {
        sessionStorage.setItem('usuarioLogado', 'sim');

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Login com Google aprovado",
            showConfirmButton: true,
            timer: 1500
        }).then(() => {
            window.location.href = 'home.html';
        });
    }, 1500);
}