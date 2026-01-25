const hamburger = document.getElementById('hamburger');
const navmenu = document.getElementById('navmenu');

function toggleMenu() {
    navmenu.classList.toggle('active');
    const expanded = navmenu.classList.contains('active');
    hamburger.setAttribute('aria-expanded', expanded);
}

hamburger.addEventListener('click', toggleMenu);
hamburger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
    }
});

// Close menu on resize if open
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navmenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    }
});