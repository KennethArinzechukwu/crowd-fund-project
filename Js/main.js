let openMenu = document.querySelector(".openMenu");
let closeMenu = document.querySelector(".closeMenu");
let navMenu = document.querySelector(".nav-items");
let backThisProject = document.querySelector("#back-this-project-btn");
let backThisProjectModal = document.querySelector("#back-this-project");
let closeModalBtn = document.querySelector("#closeModal");
let backThisProjectRow2 = document.querySelector(".back-this-project-row2");
let backThisProjectRow1 = document.querySelector(".back-this-project-row1");

let continuebtn1 = document.querySelector("#continuebtn1");
let ThankYouModal = document.querySelector(".thankyousection");
let GotItBtn = document.querySelector("#got-it-btn");

openMenu.addEventListener("click", function(){
        navMenu.style.top = "25%"
        openMenu.style.display = "none"
        closeMenu.style.display = "block"
        navMenu.style.boxShadow = "7px 7px 300px #000"
})
closeMenu.addEventListener("click", function(){
    navMenu.style.top = "-30%"
    closeMenu.style.display = "none"
    openMenu.style.display= "block"
})

backThisProject.addEventListener("click", function(){
    backThisProjectModal.style.display = "block"
})

closeModalBtn.addEventListener("click", function(){
    backThisProjectModal.style.display = "none"
})


continuebtn1.addEventListener("click", function(e){
    e.preventDefault()
    ThankYouModal.style.display = "block"
    backThisProjectModal.style.display ="none"

})
GotItBtn.addEventListener("click", function(){
    ThankYouModal.style.display = "none"
})




