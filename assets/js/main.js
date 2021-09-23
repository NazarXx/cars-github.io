$(function(){

  let headerBurger = document.querySelector('.header__burger')
  headerBurger.addEventListener('click', function(){
    let menu = document.querySelector('.header__menu')
    menu.classList.toggle('header__menu-active');
  })


  $('.main__slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    fade: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: false
        }
      },
    ]
  })

  $('.reviews__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    sliderToScroll: 1,
    responsive: [
      {
        breakpoint: 1141,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 846,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 586,
        settings: {
          slidesToShow: 1
        }
      },
    ],
    
  });
})