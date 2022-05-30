/* This allow me to command back  */
const menu = document.querySelector('#moblie-menu');
const menuLinks = document.querySelector('.navbar_menu');

// this nis where we would display our moblie menu//
//we would have to create an arrow function//
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', moblieMenu);