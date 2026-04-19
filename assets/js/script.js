let menuBtn = document.querySelector('.menuBtn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function() {
    menu.classList.toggle('show');
    menuBtn.classList.toggle('active');
});

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

setInterval(updateCountdown, 1000);
updateCountdown();