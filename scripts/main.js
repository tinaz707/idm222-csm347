

const openMenu = document.querySelector('.navbar-logo-open');
const closeMenu = document.querySelector('.navbar-logo-close');
const menu = document.querySelector('.menu-all') //the tabs
const navbar = document.querySelector('.navbar');
//click on open and the icon changes to close and the menu pops up


openMenu.addEventListener("click", () =>{
    openMenu.classList.toggle('hide');
    closeMenu.classList.toggle('hide');
    menu.classList.toggle('hidden');
})

closeMenu.addEventListener("click", () =>{
    openMenu.classList.toggle('hide');
    closeMenu.classList.toggle('hide');
    menu.classList.toggle('hidden');
})





