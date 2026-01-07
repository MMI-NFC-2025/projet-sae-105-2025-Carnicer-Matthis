// Gestion du menu mobile
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.header__menu-toggle');
    const menuClose = document.querySelector('.menu__close');
    const mobileMenu = document.querySelector('.menu');
    const body = document.body;

    // Ouvrir le menu
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function () {
            mobileMenu.classList.add('menu--active');
            body.style.overflow = 'hidden';
        });
    }

    // Fermer le menu
    if (menuClose && mobileMenu) {
        menuClose.addEventListener('click', function () {
            mobileMenu.classList.remove('menu--active');
            body.style.overflow = '';
        });
    }

    // Gestion du sous-menu
    const submenuToggles = document.querySelectorAll('.menu__nav-toggle');
    submenuToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            const parentItem = this.closest('.menu__nav-item--has-submenu');
            parentItem.classList.toggle('menu__nav-item--active');
        });
    });

    // Fermer le menu lors du clic sur un lien
    const menuLinks = document.querySelectorAll('.menu__nav-link:not(.menu__nav-toggle)');
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.remove('menu--active');
            body.style.overflow = '';
        });
    });

    // Fermer le menu avec la touche Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('menu--active')) {
            mobileMenu.classList.remove('menu--active');
            body.style.overflow = '';
        }
    });
});
