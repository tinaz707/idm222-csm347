

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



//About Me tabs
const  aboutInfo = [
    {
        title: "who??",
        text: "If you still aren't aware of who I am well I'm Christina! I am currently an undergraduate student studying User Experience and Interaction Design at Drexel University!",
    },
    
    {
        title: "what??",
        text: "I consider myself a creative designer who is confident in my UI skills. I am open-minded and tend to understand users’ needs, and with this, I bring valuable information and skills to the table.",
    },
        
    {
        title: "why??",
        text: "Art has always been such an important factor to me which is why I am pursing my passion! My goal in life is to push beyond my limits in the creative world. I don’t want to be stuck working with things I’m comfortable with; I want to keep learning and growing, trying new methods and materials.",
    }
]

const aboutContainer = document.querySelector(".about-me-tabs-version2");
const aboutButton = aboutContainer.querySelectorAll('.about-me-tab-titleV2');
const aboutText = aboutContainer.querySelector(".about-me-tab-textV2");
console.log(aboutButton);


aboutButton.forEach(button =>{ //loop through each array
    button.addEventListener("click", () =>{ //when you click on the tab

        for (let i =0; i<aboutInfo.length; i++){
            if(aboutInfo[i].title === button.id){ //does the title for each array exactly match the aboutButton id
                tab = aboutInfo[i]; //if it does, tab will store that info
                break; //found what you, need then stop
            }
        }


        if(tab){
            updateUi(tab);
        }
    });
});


function updateUi(tab){
    aboutText.querySelector("p").innerText = tab.text; //find the paragraph in the container and replace the text with the array text
};


