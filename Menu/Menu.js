const toggleMenu = () => {
  if(menu.classList[1] != 'menu-open') {
    TweenMax.to(menu, 0.15, {width: 800});
    TweenMax.to(menuList, 0.15, {opacity: 1});
    console.log(menu)
    menu.classList.add('menu-open');
  } else {
    TweenMax.to(menu, 0.15, {width: 0});
    TweenMax.to(menuList, 0.15, {opacity: 0});
    menu.classList.remove('menu-open');
    console.log(menu);
  }
}

const menu = document.querySelector('.menu');
const menuList = menu.querySelector('ul');

const menuButton = document.querySelector('.menu-button')
menuButton.addEventListener('click', toggleMenu);