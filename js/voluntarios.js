document.addEventListener('DOMContentLoaded', () => {
    
    // 1. DADOS COM CAMINHO DO ARQUIVO LOCAL
    const volunteers = [
        { 
            id: 1, 
            name: "Ana", 
            // Caminho relativo: pasta/nome-do-arquivo
            img: "/img/mid-shot-woman-therapist-with-clipboard (1).jpg" 
        },
        { 
            id: 2, 
            name: "Julia", 
            img: "/img/mid-shot-woman-therapist-with-clipboard.jpg" 
        },

        { 
            id: 5, 
            name: "Camila", 
            img: "/img/smiley-elegant-businesswoman-holding-clipboard.jpg" 
        }
    ];


    const track = document.getElementById('track');
    let currentIndex = 2; 

    // 2. RENDERIZAR CARDS
    function renderCards() {
        track.innerHTML = '';
        volunteers.forEach((vol, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            
            card.onclick = () => {
                const prevIndex = getPrevIndex();
                const nextIndex = getNextIndex();
                if (index === prevIndex) rotateCarousel('prev');
                if (index === nextIndex) rotateCarousel('next');
            };

            card.innerHTML = `
                <div class="card-inner">
                    <h3 class="card-name">${vol.name}</h3>
                    <div class="image-container">
                        <img src="${vol.img}" alt="${vol.name}">
                    </div>
                    <button class="btn-marcar" onclick="event.stopPropagation(); alert('Marcado: ${vol.name}!')">Marcar</button>
                </div>
            `;
            track.appendChild(card);
        });
        updatePositions();
    }

    // ... (O RESTO DO CÓDIGO CONTINUA IGUAL: updatePositions, getPrevIndex, etc) ...

    function updatePositions() {
        const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
            card.classList.remove('left', 'center', 'right', 'hidden');
            if (index === currentIndex) card.classList.add('center');
            else if (index === getPrevIndex()) card.classList.add('left');
            else if (index === getNextIndex()) card.classList.add('right');
            else card.classList.add('hidden');
        });
    }

    function getPrevIndex() { return (currentIndex - 1 + volunteers.length) % volunteers.length; }
    function getNextIndex() { return (currentIndex + 1) % volunteers.length; }

    window.rotateCarousel = function(direction) {
        if (direction === 'next') currentIndex = getNextIndex();
        else currentIndex = getPrevIndex();
        updatePositions();
    }

    renderCards();
});