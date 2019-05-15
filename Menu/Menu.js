const toggleMenu = () => {
  menu.classList.toggle('menu--open'); // Toggles the menu--open class 
}

const menu = document.querySelector('.menu');

const menuButton = document.querySelector('.menu-button')
menuButton.addEventListener('click', toggleMenu);