"use strict"

let leftSliderIcon = document.querySelector(".slider-icons .left-icon")
let rightSliderIcon = document.querySelector(".slider-icons .right-icon")

rightSliderIcon.addEventListener("click", function () {
    let activeImage = document.querySelector(".digital-web-images  .active-img")
    activeImage.classList.remove("active-img")
    if (activeImage.nextElementSibling != null) {
        activeImage.nextElementSibling.classList.add("active-img");

    } else {
        this.parentNode.nextElementSibling.firstElementChild.classList.add("active-img")
    }
})

leftSliderIcon.addEventListener("click", function () {
    let activeImage = document.querySelector(".digital-web-images  .active-img")
    activeImage.classList.remove("active-img")
    if (activeImage.previousElementSibling != null) {
        activeImage.previousElementSibling.classList.add("active-img")
    } else {
        this.parentNode.nextElementSibling.lastElementChild.classList.add("active-img")
    }
})


let navMenu = document.querySelector(".first-menu");
let navMenu2 = document.querySelector(".second-menu")
let activeMenu = document.querySelector(".active-menu")
let activeMenu2 = document.querySelector(".active-menu2")


navMenu.addEventListener("mouseover", function () {
    activeMenu.style.display = "block";
    activeMenu2.style.display = "none";
});

navMenu.addEventListener("mouseout", function () {

    setTimeout(function () {
        activeMenu.style.display = "none";
    }, 4000);
});
navMenu2.addEventListener("mouseover", function () {
    activeMenu2.style.display = "block";
    activeMenu.style.display = "none";
});

navMenu2.addEventListener("mouseout", function () {
    setTimeout(function () {
        activeMenu2.style.display = "none";
    }, 4000);
});

$(function () {
    $('.students').slick({
        autoplay: true
    });
});

let frontCard = document.querySelector(".front-card");
let backCard = document.querySelector(".back-card");

frontCard.addEventListener("mouseover",function(){
   
        backCard.style.visibility = "visible"
    
})
frontCard.addEventListener("mouseout",function(){
    setTimeout(function () {
        backCard.style.visibility = "hidden"
    }, 1000);
})