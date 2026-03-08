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
        //lets you click the drop down first not just the link
        submenu.classList.toggle('sub-hide');

        dropdown.classList.toggle('hide');
        undrop.classList.toggle('hide');
    })

} )


//carasol

const carousel = document.querySelectorAll('.carousel-item-ul'); //gets both carousels SLIDES part not the whole carousel


carousel.forEach(_slide =>{
    const slides = _slide.querySelectorAll('.carousel-item'); //nodelist for each image from each carousel
    const carouselDiv = _slide.closest('.carousel'); //.closets looks through all the elements(up the tree) till it finds exactly .carousel
    const leftButton = carouselDiv.querySelector('.carousel-left-arrow'); //looks in both carousel and gets both the arrows
    const rightButton = carouselDiv.querySelector('.carousel-right-arrow');

    console.log(slides);

    let start = 0; //carasol starts on the first image of the nodelist from 'slides'

    function updateImage(){
        _slide.style.transform = `translateX(-${start*100}%)`; //if start is [2] the caraol-items-ul will shift to the left by 200 -> using template literal to calucle and inset in the string 
    }

    rightButton.addEventListener("click", ()=>{
        start++; //start +1

        if(start >= slides.length/*0 1 2*/){ //if the image # is greater than or equal to the carasol item, then restart to the first one
            start=0;
        }
        updateImage();
    });

    leftButton.addEventListener("click", ()=>{
        start--; //start-1

        if(start < 0){ //if the image# is less then 0 so before the first img then go to the last slide
            start= slides.length - 1; //thers 3 in the length so 3-1 =2 --> [2] is the last slide 
        }
        updateImage();
    });


});


