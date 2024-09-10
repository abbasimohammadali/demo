let but_to_top = document.querySelector('.button-scroll-top')

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});


function scrollpage() {

  if(window.scrollY > 500) {
    but_to_top.style.display= 'block'
  }
  else{
    but_to_top.style.display = 'none'
  }

}

window.addEventListener('scroll', scrollpage)