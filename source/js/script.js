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
                $('.top-menu__lists, .top-menu__items').hide();
            }
            else {
              $(this).addClass('top-menu--opened');
              $(this).removeClass('top-menu--closed');
              $(this).removeAttr('style');
              $('.top-menu__lists, .top-menu__items').show();
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
                $(".sub-menu__lists").show();
            }
            else {
              $(this).removeClass('sub-menu--opened');
              $(this).addClass('sub-menu--closed');
              $(this).removeAttr('style');
            }
       });
    });
});


$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('.sub-menu a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('sub-menu__item--active');
        })
        $(this).addClass('sub-menu__item--active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-100
        }, 500, 'linear', function () {
            window.location.hash = target-100;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.sub-menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top-100 <= scrollPos && refElement.position().top-100 + refElement.height() > scrollPos) {
            $('.sub-menu ul li a').removeClass("sub-menu__item--active");
            currLink.addClass("sub-menu__item--active");
        }
    });
}
