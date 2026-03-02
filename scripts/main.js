const openMenu = document.querySelector('.navbar-logo-open');
const closeMenu = document.querySelector('.navbar-logo-close');
const menu = document.querySelector('.menu-all') //the tabs
const navbar = document.querySelector('.navbar');
//click on open and the icon changes to close and the menu pops up

// openMenu.addEventListener("click", () => {
    // openMenu.classList.toggle("hide");
    // closeMenu.classList.toggle("hide");
    // menu.classList.add("active");
// }, false);
    
// closeMenu.addEventListener("click", () => {
    // closeMenu.classList.toggle("hide");
    //  openMenu.classList.toggle("hide");
    //  menu.classList.remove("active");
// }, false);

openMenu.addEventListener("click", menuMobile, false);
    function menuMobile(){
        openMenu.classList.toggle('active');
        navbar.classList.toggle('active')
    }
