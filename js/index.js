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

        }
    })
}

function whenHelpSlider() {
    var swiper = new Swiper('.when-help .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: -1,
        navigation: {
            nextEl: '.when-help .swiper-button-next',
            prevEl: '.when-help .swiper-button-prev',
        },
        breakpoints: {

        }
    })
}

function qualitySlider() {
    var swiper = new Swiper('.quality .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 23,
        navigation: {
            nextEl: '.quality .swiper-button-next',
            prevEl: '.quality .swiper-button-prev',
        },
        breakpoints: {

        }
    })
}

$(document).ready(function() {
    trustSlider()

    $(window).resize(function() {
        if (window.innerWidth < 1255) {
            $(".services3 .services__items").removeClass("services__items--dop")
        } else {
            $(".services3 .services__items").addClass("services__items--dop")
        }
        if (window.innerWidth < 992) {
            whenHelpSlider()
            qualitySlider()
        }
        if (window.innerWidth < 768) {
            $(".service-detail").removeClass("service-detail--active")
        }

    });
    if (window.innerWidth < 1255) {
        $(".services__items").removeClass("services__items--dop")
    }
    if (window.innerWidth < 992) {
        whenHelpSlider()
        qualitySlider()
    }
    if (window.innerWidth < 768) {
        $(".service-detail").removeClass("service-detail--active")
    }

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




    var $whatHelpElements = $('.when-help__item');
    $(window).scroll(function() {
        var scroll = $(window).scrollTop() + $(window).height();

        $whatHelpElements.each(function(i, el) {
            var offset = $(el).offset().top + $(el).height()
            if (scroll > offset) {
                $(el).addClass("when-help__item--animate")
            } else {
                $(el).removeClass("when-help__item--animate")
            }
        });

    });


    $(".service-detail__tab").click(function() {
        let path = $(this).attr("data-tab-path")
        let parentTabs = $(this).parent(".service-detail__tabs")
        console.log($(parentTabs))
        $(parentTabs).children(".service-detail__tab").removeClass("service-detail__tab--active")
        $(this).addClass("service-detail__tab--active")
        $(parentTabs).siblings(".service-detail__tab-content").removeClass("service-detail__tab-content--active")
        $(parentTabs).siblings(`.service-detail__tab-content[data-tab-path='${path}']`).addClass("service-detail__tab-content--active")
    })




})


function serviceDetail(id, dop = false) {
    if (window.innerWidth > 768 && dop) {
        $(".services3 .service-detail").removeClass("service-detail--active")
    } else {
        $(".service-detail").removeClass("service-detail--active")
    }
    $(`#${id}`).addClass("service-detail--active")



    if (window.innerWidth < 768) {
        $("body").append(`<div class="backdrop"></div>`)
        $("body").addClass("fixed-body")
    }
    $(".backdrop").click(function() {
        $(".service-detail").removeClass("service-detail--active")
        $(".backdrop").remove()
        $("body").removeClass("fixed-body")
    })
    $(".service-detail__close").click(function() {
        $(".service-detail").removeClass("service-detail--active")
        $(".backdrop").remove()
        $("body").removeClass("fixed-body")
    })


    if (window.innerWidth > 768) {
        let scrollTo = $(`#${id}`).offset().top;
        $(document).scrollTop(scrollTo);
    }

}

function modal(id) {

    $("body").append(`<div class="backdrop"></div>`)
    $("body").addClass("fixed-body")
    $(".modal").removeClass("modal--active")
    $(`#${id}`).addClass("modal--active")

    $(".backdrop").click(function() {
        $(".modal").removeClass("modal--active")
        $(".backdrop").remove()
        $("body").removeClass("fixed-body")
    })
    $(".modal__close").click(function() {
        $(".modal").removeClass("modal--active")
        $(".backdrop").remove()
        $("body").removeClass("fixed-body")
    })

}