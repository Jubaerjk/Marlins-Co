// ================================
// MOBILE NAV TOGGLE
// ================================
const btnNav = document.querySelector(".btn-mobile-nav");
const navbar = document.querySelector(".navbar");

btnNav.addEventListener("click", () => {
    navbar.classList.toggle("nav-open");
});


// ================================
// CLOSE MENU WHEN CLICK LINK
// ================================
document.querySelectorAll(".navmenu a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("nav-open");
    });
});


// ================================
// SLIDER BUTTONS (placeholder)
// ================================
// document.querySelector(".slider-btn-prev").addEventListener("click", () => {
//     console.log("Previous slide");
// });

// document.querySelector(".slider-btn-next").addEventListener("click", () => {
//     console.log("Next slide");
// });








// ================================
// ARTICLE SLIDER
// ================================

const viewport = document.querySelector('.article-content');
const track = document.querySelector('.article-track');
const cards = document.querySelectorAll('.article-box');
const prevBtn = document.querySelector('.article-slider-btn-prev');
const nextBtn = document.querySelector('.article-slider-btn-next');

let index = 0;
const gap = 32; // must match CSS gap (2rem ≈ 32px)

function getCardWidth() {
    return cards[0].offsetWidth + gap;
}

function updateSlider() {
    track.style.transform = `translateX(-${index * getCardWidth()}px)`;
}

/* Button navigation */
nextBtn.addEventListener('click', () => {
    if (index < cards.length - 1) {
        index++;
        updateSlider();
    }
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateSlider();
    }
});

/* Swipe support */
let startX = 0;

viewport.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
});

viewport.addEventListener('touchend', e => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (diff > 50 && index < cards.length - 1) index++;
    if (diff < -50 && index > 0) index--;

    updateSlider();
});

/* Recalculate on resize */
window.addEventListener('resize', updateSlider);









