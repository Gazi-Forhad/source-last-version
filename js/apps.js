var swiper = new Swiper(".hero-slider-main", {
  loop: 'true',
  centerSlider: 'true',
  grapCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
      delay: 5000,
    },
});



var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 40,
// Responsive breakpoints
breakpoints: {
// when window width is >= 320px
320: {
  spaceBetween: 27
},
// when window width is >= 480px
480: {
  spaceBetween: 27
},
// when window width is >= 640px
640: {
  spaceBetween: 27
},
  // when window width is >= 640px
  1024: {
    spaceBetween: 40
  }
}
});






