const carousel = document.querySelector('.carousel');
const cards = Array.from(carousel.children);

cards.forEach(card => {
    const clone = card.cloneNode(true);
    carousel.appendChild(clone);
});