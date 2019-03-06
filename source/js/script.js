                //скрипты на js
// var navMain = document.querySelector('.top-menu__nav');
// var navToggle = document.querySelector('.top-menu__toggle');
//
// navMain.classList.remove('top-menu--nojs');
//
// navToggle.addEventListener('click', function() {
//   if (navMain.classList.contains('top-menu--closed')) {
//     navMain.classList.remove('top-menu--closed');
//     navMain.classList.add('top-menu--opened');
//   } else {
//     navMain.classList.add('top-menu--closed');
//     navMain.classList.remove('top-menu--opened');
//   }
// });
//
// var navMain2 = document.querySelector('.sub-menu__nav');
// var navToggle2 = document.querySelector('.sub-menu__toggle');
//
// navMain2.classList.remove('sub-menu--nojs');
//
// navToggle2.addEventListener('click', function() {
//   if (navMain2.classList.contains('sub-menu--closed')) {
//     navMain2.classList.remove('sub-menu--closed');
//     navMain2.classList.add('sub-menu--opened');
//   } else {
//     navMain2.classList.add('sub-menu--closed');
//     navMain2.classList.remove('sub-menu--opened');
//   }
// });
//
//
// var link = document.querySelector(".goods-week__link, .catalog__icon");
// var popup = document.querySelector(".modal");
// // var close = popup.querySelector(".modal::after");
// link.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   popup.classList.add("modal-show");
// });
//
// close.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     popup.classList.remove("modal-show");
// });



$(function(){
    $('.where__button').on('click', function() {
       $('.modal').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
       });

    });

});
$(function(){
    $('.top-menu__toggle').on('click', function() {
       $('.top-menu__nav').slideToggle(300, function(){
            if( $(this).hasClass('top-menu--opened')){
                $(this).addClass('top-menu--closed');
                $(this).removeClass('top-menu--opened');
                $(this).removeAttr('style');
                $(".top-menu__lists").fadeOut();
                $('.top-menu__items').fadeOut();
            }
            else {
              $(this).addClass('top-menu--opened');
              $(this).removeClass('top-menu--closed');
              $(this).removeAttr('style');
              $('.top-menu__lists').fadeIn();
              $('.top-menu__items').fadeIn();
            }
       });
    });
});

$(function(){
    $('.sub-menu__toggle').on('click', function() {
       $('.sub-menu__nav').slideToggle(300, function(){
            if( $(this).hasClass('sub-menu--closed')){
                $(this).removeClass('sub-menu--closed');
                $(this).addClass('sub-menu--opened');
                $(this).removeAttr('style');
                $(".sub-menu__lists").fadeIn();
            }
            else {
              $(this).removeClass('sub-menu--opened');
              $(this).addClass('sub-menu--closed');
              $(this).removeAttr('style');
            }
       });
    });
});
