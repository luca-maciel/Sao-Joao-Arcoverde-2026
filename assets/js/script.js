

let menuBtn = document.querySelector('.menuBtn');
let menu = document.querySelector('.menu');

if (menuBtn && menu) {
    menuBtn.addEventListener('click', function() {
        menu.classList.toggle('show');
        menuBtn.classList.toggle('active');
    });
}

// Contagem regressiva para 13 de junho de 2026
const targetDate = new Date('2026-06-13T00:00:00').getTime();
const countdownElement = document.querySelector('.regressiveCount');

function formatBlock(value, label) {
    return `
        <div class="countdown-item">
            <span class="countdown-value">${String(value).padStart(2, '0')}</span>
            <span class="countdown-label">${label}</span>
        </div>
    `;
}

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (!countdownElement) return;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

        countdownElement.innerHTML = `
            ${formatBlock(days, 'DIAS')}
            ${formatBlock(hours, 'HORAS')}
            ${formatBlock(minutes, 'MINUTOS')}
            `;
    } else {
        countdownElement.innerHTML = '<div class="countdown-ended">O São João chegou!</div>';
    }
}

if (countdownElement) {
    setInterval(updateCountdown, 1000);
    updateCountdown();
}

// Galeria slideshow automático com controles
const galeryImages = document.querySelector('.galeryImages');
const images = document.querySelectorAll('.galeryImage');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

if (galeryImages && images.length > 0 && prevBtn && nextBtn) {
    let currentIndex = 0;
    const totalImages = images.length;

    function slideGallery(direction = 1) {
        currentIndex = (currentIndex + direction + totalImages) % totalImages;
        const offset = -currentIndex * 100;
        galeryImages.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        slideGallery(1);
    }

    function prevSlide() {
        slideGallery(-1);
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    setInterval(nextSlide, 5000);
}

// Dropdown do artista com imagem
const dropdownArtistCards = document.querySelectorAll('.artistaCard.hasDropdown');
dropdownArtistCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});