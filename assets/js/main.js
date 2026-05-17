// Fungsi manipulasi class navbar saat di-scroll
function handleNavbarScroll() {
    const navbar = document.getElementById('mainNavbar');
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
        navbar.classList.remove('navbar-dark');
        navbar.classList.add('navbar-light');
    } else {
        navbar.classList.remove('navbar-scrolled');
        navbar.classList.remove('navbar-light');
        navbar.classList.add('navbar-dark');
    }
}

// Listener Scroll
window.addEventListener('scroll', handleNavbarScroll);
document.addEventListener('DOMContentLoaded', handleNavbarScroll);