$(document).ready(function(){
    var typed = new Typed(".typing", {
        strings: ["Desenvolvedor", "FullStack Jr"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
  $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsiveClass:true,
      responsive: {
          300:{
              items: 1,
              nav: false
          },
          900:{
              items: 2,
              nav: false
          },
          1200:{
              items: 3,
              nav: false
          }
      }
  });
});
