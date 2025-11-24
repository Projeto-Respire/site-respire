function pauseAll(exceptId) {
    const audios = document.querySelectorAll("audio");
    audios.forEach(a => {
        if (a.id !== exceptId) {
            a.pause();
            a.currentTime = 0; // opcional
        }
    });
}

function toggleChuva(event) {
    event.preventDefault();
    pauseAll("audioChuva");  // pausa só os outros
    let audio = document.getElementById("audioChuva");

    audio.paused ? audio.play() : audio.pause();
}

function toggleVento(event) {
    event.preventDefault();
    pauseAll("audioVento");
    let audio = document.getElementById("audioVento");

    audio.paused ? audio.play() : audio.pause();
}

function toggleMar(event) {
    event.preventDefault();
    pauseAll("audioMar");
    let audio = document.getElementById("audioMar");

    audio.paused ? audio.play() : audio.pause();
}

function togglePassaros(event) {
    event.preventDefault();
    pauseAll("audioPassaros");
    let audio = document.getElementById("audioPassaros");

    audio.paused ? audio.play() : audio.pause();
}

function toggleNoite(event) {
    event.preventDefault();
    pauseAll("audioNoite");
    let audio = document.getElementById("audioNoite");

    audio.paused ? audio.play() : audio.pause();
}

function toggleRuidos(event) {
    event.preventDefault();
    pauseAll("audioRuidos");
    let audio = document.getElementById("audioRuidos");

    audio.paused ? audio.play() : audio.pause();
}
