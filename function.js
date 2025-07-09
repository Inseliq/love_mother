// Простые эффекты анимации
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animated');
    for(let i = 0; i < elements.length; i++) {
        setTimeout(() => {
            elements[i].classList.add(`animation-${i}`);
        }, i * 100); // задержка между эффектами
    }
});