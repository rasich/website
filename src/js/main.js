var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');


button.addEventListener('click', function () {
  modal.classList.add('modal_active');
  setInterval(("modal.classList.remove('modal_active')"), 5000)
});

close.addEventListener('click', function() {
  modal.classList.remove('modal_active');
});



/* Инициализация WOW.js */
  new WOW().init();

 /* Скрипт слайдера */
 $(document).ready(function () {
   /* Валидация формы */
   $('#brif-form').validate({
     rules: {
       username: {
         required: true,
         minlength: 2
       },
       phone: {
         required: true,
         email: true
       }
     },
     messages: {
       username: {
         required: "Укажите имя",
         minlength: jQuery.validator.format("Минимум {0} символа")
       },
       phone: "Нам нужен ваш номер телефона",
     }
   });

   /* Маска для телефона */
   $('.phone').mask('+7 (999) 999-99-99')


   /* Скрипт слайдера */
   $('.slider').slick({
     infinite: true,
     slidesToShow: 3,
     slidesToScroll: 1,
     prevArrow: $('.arrows__left'),
     nextArrow: $('.arrows__right'),
     responsive: [
       {
         breakpoint: 1200,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 1
         }
       },
       {
         breakpoint: 768,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1
         }
       },
       {
         breakpoint: 567,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
     ]
   });
 });