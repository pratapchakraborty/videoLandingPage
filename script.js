//javascript for responcive navigation menu//
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () =>{
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

//javascript for video slider nabvigation
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

let sliderNav = function(manual){
   btns.forEach((btn) => {
       btn.classList.remove("active");
   });

   contents.forEach((content) => {
       content.classList.remove("active");
   });

   slides.forEach((slide) => {
       slide.classList.remove("active");
   });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
       sliderNav(index);
    })
})