/* Menu */
document.querySelector('.M-Icon-Container').addEventListener('click', () => 
  {
    document.querySelector('.nav-container').classList.toggle('show')
});

 /* Cookies */
// function compruebaAceptaCookies() {
//     if(localStorage.aceptaCookies == 'true'){
//       cajacookies.style.display = 'none';
//     }
//   }
  
//   function aceptarCookies() {
//     localStorage.aceptaCookies = 'true';
//     cajacookies.style.display = 'none';
//   }
  
//   $(document).ready(function () {
//     compruebaAceptaCookies();
// });
  

/* sliders */
/* pagina de retroexcavadora */

const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
  let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s"
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 500);
}

function Prev() {
  let sliderSection = document.querySelectorAll(".slider__section");
  let sliderSectionLast = sliderSection[sliderSection.length -1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.5s"
  setTimeout(function(){
    slider.style.transition = "none";
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 500);
}

btnRight.addEventListener('click', function() {
  Next();
});

btnLeft.addEventListener('click', function() {
  Prev();
});
setInterval(function (){
  Next();
}, 5000);