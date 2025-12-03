jQuery(document).ready(function ($) {

    $('.block_slider').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 2000,
        fade: true,
        infinite: true,
        cssEase: 'linear'
    });

    $('.slid_nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slid_for',
        dots: false,
        arrows: false,
        variableWidth: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.slid_for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        fade: true,
        asNavFor: '.slid_nav',
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    adaptiveHeight: true
                }
            }
        ]
    });

    $('.tenders_slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        slidesToScroll: 1,
        variableWidth: true,
        cssEase: 'linear',
        infinite: true,
        prevArrow: '<div class="prev"></div>',
        nextArrow: '<div class="next"></div>',
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });

    $('.slider_nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider_for',
        dots: false,
        arrows: false,
        variableWidth: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.slider_for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        fade: true,
        asNavFor: '.slider_nav',
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    adaptiveHeight: true
                }
            }
        ]
    });

    $('.portfolio_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        fade: true,
        arrows: true,
        cssEase: 'linear',
        focusOnSelect: true,
        centerMode: false,
        prevArrow: '<div class="prev3"></div>',
        nextArrow: '<div class="next3"></div>',
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    variableWidth: false,
                    adaptiveHeight: true,
                    arrows: false
                }
            }
        ]
    });

    $('.suppliers_slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        slidesToScroll: 1,
        variableWidth: true,
        cssEase: 'linear',
        infinite: true,
        prevArrow: '<div class="prev4"></div>',
        nextArrow: '<div class="next4"></div>',
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });

    if (screen.width > 480) {
        $('.client_slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 3000,
            focusOnSelect: true,
            centerMode: false,
            vertical: true,
            verticalSwiping: true,
            prevArrow: '<div class="prev2"></div>',
            nextArrow: '<div class="next2"></div>'
        });

    }

    if (screen.width < 480) {

            var $menu = $("header > .container");
            $(window).scroll(function () {
                if ($(this).scrollTop() > 0) {
                    $menu.addClass("fixe");
                    $("header").addClass('body_scroll');
                } else if ($(this).scrollTop() <= 0 && $menu.hasClass("fixe")) {
                    $menu.removeClass("fixe");
                    $("header").removeClass('body_scroll');
                }
            });

        $('.menu_mob').on('click', function (e) {
            $('.menu_panel_mob').fadeIn(400);

        });

        $('.menu_mob_close').on('click', function (e) {
            $('.menu_panel_mob').fadeOut(400);

        });

        $('.block_slider_mob').slick({
            dots: false,
            arrows: false,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: false,
            autoplaySpeed: 4000,
            fade: true,
            infinite: true,
            cssEase: 'linear',
            adaptiveHeight: true
        });

        $('.client_slider').slick({
            dots: false,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            slidesToScroll: 1,
            cssEase: 'linear',
            infinite: true,
            prevArrow: '<div class="prev"></div>',
            nextArrow: '<div class="next"></div>',
            slidesToShow: 1,
            arrows: false
        });

        $('.price_list').on('click', function (e) {
            e.preventDefault();
            $('.black_theme_modal.price_modal').show(300);
        });

        $('.solicit_proposals').on('click', function (e) {
            e.preventDefault();
            $('.black_theme_modal.solicit_proposals_modal').show(300);
        });

    }

    if (screen.width > 767) {
        var $menu = $(".fix");
        $(window).scroll(function () {
            if ($(this).scrollTop() > 20) {
                $menu.addClass("fixed");
                $("main").addClass('body_scroll');
            } else if ($(this).scrollTop() <= 20 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed");
                $("main").removeClass('body_scroll');
            }
        });
    }

    $('*[data-scroll]').click(function(){
        if($("*").is("."+$(this).attr('data-scroll'))){
            $('html, body').animate({scrollTop: ($("."+$(this).attr('data-scroll')).offset().top)-100}, 1000);
        }
        return false;
    });

    $('*[data-main-scroll]').click(function(){
        if(window.location.pathname != '/'){
            location.href = "/#"+$(this).attr('data-main-scroll');
        }else{
            if($("*").is("."+$(this).attr('data-main-scroll'))){
                $('html, body').animate({scrollTop: ($("."+$(this).attr('data-main-scroll')).offset().top)-100}, 1000);
            }
        }
        return false;
    });

    if (window.location.hash){
        if($("*").is("." + String(window.location.hash.slice(1)))){
            $('html, body').animate({scrollTop: ((($("." + String(window.location.hash.slice(1)) ).offset().top) - 100) )}, 1000);
        }
    }

    


    //Работа с формой

    var inspMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }

    today = yyyy + '-' + mm + '-' + dd;
    $('input[type="date"]').attr("min", today);

    //Работа с формой
    $('.form .form__form-block input, .form .form__form-block select, .form .form__form-block textarea').focus(function () {
        if ($(this).parent('.form__form-block').children('label').hasClass('error')) {
            $(this).parent('.form__form-block').children('label').html($(this).parent('.form__form-block').children('label').attr('data-success')).removeClass('error');
        }
        $(this).parent('.form__form-block').children('label').addClass('active');
    })
    $('.form .form__form-block input, .form .form__form-block select, .form .form__form-block textarea').blur(function () {
        if (!$(this).val()) {
            $(this).parent('.form__form-block').children('label').removeClass('active');
        }
    })
    $('.form .form__form-block .form-block__number-field').change(function () {
        var my = $(this).val().replace(/[^0-9]/gim, '');
        if (my.length * 1 == 10) {
            my = '7' + my.substr(0);
        }
        if (my.charAt(0) * 1 == 8) {
            my = '7' + my.substr(1);
        }
        $(this).val(my);
    });
    $('.form__form-select input').change(function () {
        if ($(this).is(':checked')) {
            $(this).parent().removeClass('active');
        }
    });
    $("form").submit(function (e) {
        i = true;
        e.preventDefault();
        mForm = $(this);


        $(mForm).find('.form-block__obligatory-field').each(function () {
            if ($.trim($(this).val()) == '') {
                $(this).parent().children('label').html($(this).parent().children('label').attr('data-error')).addClass('error');
                i = false;
            }
            if ($(this).hasClass('form-block__phone-field')) {
                if ((($(this).val().length) < 6) || (($(this).val().length) > 11)) {
                    $(this).parent().children('label').html($(this).parent().children('label').attr('data-error')).addClass('error');
                    i = false;
                }
            }
            if ($(this).hasClass('form-block__phone-field-11')) {
                if (($(this).val().length) != 11) {
                    $(this).parent().children('label').html($(this).parent().children('label').attr('data-error')).addClass('error');
                    i = false;
                }
            }
        });

        $(mForm).find('.form-block__mail-field').each(function () {
            if (($.trim($(this).val()) != '') && (!inspMail.test($.trim($(this).val())))) {
                $(this).parent().children('label').html($(this).parent().children('label').attr('data-error')).addClass('error');
                i = false;
            }
        });

        $(mForm).find('.form__form-select input').each(function () {
            if (!$(this).is(':checked')) {
                i = false;
                $(this).parent().addClass('active');
            }
        });
        if (i) {
            $.ajax({
                url: ("/assets/templates/forms.php"),
                data: $(mForm).serialize(),
                dataType: 'html',
                type: "post",
                success: function (msg) {
                    $(mForm)[0].reset();
                    $(mForm).find('label').each(function () {
                        $(this).removeClass('error');
                        $(this).removeClass('active');
                    });
                    if ($("div").is(".black_theme_modal")) {
                        $(".black_theme_modal").slideUp(400);
                    }
                    $('.thanks').slideDown(400);
                    setTimeout(function () {
                        $('.thanks').slideUp(400);
                    }, 3000);
                },
                error: function (XMLHttpRequest) {
                    alert('Ошибка');
                }
            });
        }
    });


    // модальные окна формы

    $('.hide-window .fa-times').on('click', function (e) {
        e.preventDefault();
        $('.hide-window').hide(300);
    });

    $('.black_theme_modal .fa-times').on('click', function (e) {
        e.preventDefault();
        $('.black_theme_modal').hide(300);
    });

    $('.call').on('click', function (e) {
        e.preventDefault();
        $('.black_theme_modal.call_modal').show(300);
    });

    $('.buy_septic.but').on('click', function (e) {
        e.preventDefault();
        $('.black_theme_modal.buy').show(300);
    });

    $(window).scroll(function () {
    var $btn = $(".flex .right > div");
    if (screen.width > 480) {
        if ($(this).scrollTop() > 200) {
            $btn.addClass("fi");
        } else if ($(this).scrollTop() <= 200 && $btn.hasClass("fi")) {
            $btn.removeClass("fi");
        } 
        console.log(4);
        if ($(this).scrollTop() > ($(document).height() - ($(window).height() + 200))) {
            $btn.addClass("bottom");
        } else if ($(this).scrollTop() < ($(document).height() - ($(window).height() + 200))) {
            $btn.removeClass("bottom");
        }
    }





});




    $(document).mouseup(function (e) {
        var container = $(".openModal");
        if ($(container).is(':visible')) {
            if (container.has(e.target).length === 0) {
                if (!$(e.target).hasClass('openModal')) {
                    $('.black_theme_modal').hide(300);
                }
            }
        }
    });



});

ymaps.ready(init); // карта соберется после загрузки скрипта и элементов
var myMap; // заглобалим переменную карты чтобы можно было ею вертеть из любого места
function init() { // функция - собиралка карты и фигни
    myMap = new ymaps.Map("map", { // создаем и присваиваем глобальной переменной карту и суем её в див с id="map"
        center: [54.733377, 20.433998], // ну тут центр
        behaviors: ['default', 'scrollZoom'], // скроллинг колесом
        zoom: 17 // тут масштаб
    });
    myMap.controls // добавим всяких кнопок, в скобках их позиции в блоке
    /* Создаем кастомные метки */
    myPlacemark0 = new ymaps.Placemark([54.733377, 20.433998], { // Создаем метку с такими координатами и суем в переменную
        balloonContent: '<div class="ballon"><span>СПЕЦСНАБ</span><br/><p>236022 г. Калининград ул. Лейтенанта Катина 88</p></div>' // сдесь содержимое балуна в формате html, все стили в css
    }, {
        iconImageHref: '/assets/templates/images/marker.png', // картинка иконки
        iconImageSize: [42, 42], // размер иконки
        iconImageOffset: [-13, -12], // позиция иконки
        balloonContentSize: [290, 110], // размер нашего кастомного балуна в пикселях
        // balloonLayout: "default#imageWithContent", // указываем что содержимое балуна кастомная херь
        // balloonImageHref: 'img/ballon1.png', // Картинка заднего фона балуна
        balloonImageOffset: [0, 0], // смещание балуна, надо подогнать под стрелочку
        balloonImageSize: [260, 89], // размер картинки-бэкграунда балуна
        balloonShadow: false,
        balloonAutoPan: false // для фикса кривого выравнивания
    });
    /* тоже самое для других меток */
    /* Добавляем */
    myMap.geoObjects
        .add(myPlacemark0);
    /* Фикс кривого выравнивания кастомных балунов */
    // myMap.geoObjects.events.add([
    //     'balloonopen'
    // ], function (e) {
    //     var geoObject = e.get('target');
    //     myMap.panTo(geoObject.geometry.getCoordinates(), {
    //         delay: 0
    //     });
    // });
}




