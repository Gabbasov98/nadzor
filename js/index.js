function trustSlider() {
    var swiper = new Swiper('.trust .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: -1,
        navigation: {
            nextEl: '.trust .swiper-button-next',
            prevEl: '.trust .swiper-button-prev',
        },
        pagination: {
            el: '.trust .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            // 320: {
            //     slidesPerView: 2,
            //     spaceBetween: 20
            // },

        }
    })
}

$(document).ready(function() {
    trustSlider()

    $(".select").niceSelect()
    $('input[type="tel"]').mask('+7 (999) 999-9999', { placeholder: '+7 (   )    -    ' });

    $(".nav__item-show").click(function() {
        $(this).siblings(".nav__item-hidden").slideToggle()
    })


    $(".sidebar__burger").click(function() {
        $(this).toggleClass("sidebar__burger--active")
        $("body").toggleClass("fixed-body")
        $(".sidebar__bottom").toggleClass("sidebar__bottom--active")
    })




    $(".tab").click(function() {
        let path = $(this).attr("data-tab-path")
        $(".tab").removeClass("tab--active")
        $(this).addClass("tab--active")
        $(".tab__content").removeClass("tab__content--active")
        $(`.tab__content[data-tab-path="${path}"]`).addClass("tab__content--active")
    })



})