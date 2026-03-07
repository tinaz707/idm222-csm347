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

//only works for one
// const dropdownButton = document.querySelector('.sub-image-text');
// const submenu = document.querySelector('.nav-sub-menu');
// const dropdown = document.querySelector('.drop-down-img');
// const undrop = document.querySelector('.un-drop-down-img');

// dropdownButton.addEventListener("click", ()=> {
//     submenu.classList.toggle('sub-hide');

//     dropdown.classList.toggle('hide');
//     undrop.classList.toggle('hide');
// })




const dropdownButton = document.querySelectorAll('.sub-image-text');//get both classes

// two classes -> need a loop

dropdownButton.forEach(drop => { //drop = the class div: sub-image-text
    const submenu = drop.parentElement.querySelector('.nav-sub-menu'); //parentElement goes up one -> gets the <li> element -> queryselctor then finds the .navsubmenu only in the li element
    const dropdown = drop.querySelector('.drop-down-img');
    const undrop = drop.querySelector('.un-drop-down-img');

    drop.addEventListener("click", (event)=> { //event is just a varibale 
        event.preventDefault(); //lets you click the drop down first not just the link
        submenu.classList.toggle('sub-hide');

        dropdown.classList.toggle('hide');
        undrop.classList.toggle('hide');
    })

} )






