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
    })
}

function projectSlider() {
    var swiper = new Swiper('.index-projects .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        navigation: {
            nextEl: '.index-projects .swiper-button-next',
            prevEl: '.index-projects .swiper-button-prev',
        },
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
    })
}

function onlineSlider() {
    var swiper = new Swiper('.online .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.online .swiper-button-next',
            prevEl: '.online .swiper-button-prev',
        },

    })
}

function gallery() {
    var swiper = new Swiper(".workers .mySwiper", {
        spaceBetween: 0,
        slidesPerView: 'auto',
        freeMode: true,
        watchSlidesProgress: true,
        allowSlidePrev: false,
        allowSlideNext: false,
    });
    var swiper2 = new Swiper(".workers .mySwiper2", {
        spaceBetween: 10,
        effect: 'cards',
        navigation: {
            nextEl: ".workers .swiper-button-next",
            prevEl: ".workers .swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
}

$(document).ready(function() {
    trustSlider()
    projectSlider()

    onlineSlider()
    gallery()

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

    var $serviceCards = $('.service-card');
    $(window).scroll(function() {
        var scroll = $(window).scrollTop() + $(window).height();

        $serviceCards.each(function(i, el) {
            var offset = $(el).offset().top + $(el).height()
            if (scroll > offset) {
                $(el).addClass("service-card--animate")
            } else {
                $(el).removeClass("service-card--animate")
            }
        });

    });

    $(".service-card").click(function() {
        let attr = $(this).find(".service-card__btn").attr("data-btn-target")
        let attr2 = $(this).find(".service-card__btn").attr("data-btn-target2")
        serviceDetail(attr, attr2)
    })

    $(".service-detail__tab").click(function() {
        let path = $(this).attr("data-tab-path")
        let parentTabs = $(this).parent(".service-detail__tabs")
        console.log($(parentTabs))
        $(parentTabs).children(".service-detail__tab").removeClass("service-detail__tab--active")
        $(this).addClass("service-detail__tab--active")
        $(parentTabs).siblings(".service-detail__tab-content").removeClass("service-detail__tab-content--active")
        $(parentTabs).siblings(`.service-detail__tab-content[data-tab-path='${path}']`).addClass("service-detail__tab-content--active")
    })

    $(".service-detail__btn").click(function(e) {
        e.preventDefault();
        consultModal("consultModal2")
    })

    $(".consult-modal__form-btn").click(function(e) {
        e.preventDefault();
        consultModal("consultModal2")
    })

    $(".consultation__btn").click(function(e) {
        e.preventDefault();
        consultModal("consultModal2")
    })

    $(".types__tab").click(function() {
        let path = $(this).attr("data-tab-path")
        $(".types__tab").removeClass("types__tab--active")
        $(this).addClass("types__tab--active")
        $(".types__group-modal").removeClass("types__group-modal--active")
        $(`.types__group-modal[data-tab-path="${path}"]`).addClass("types__group-modal--active")
    })

    $(".types__group-point").click(function() {
        let path = $(this).attr("data-tab-path")
        $(".types__group-point").removeClass("types__group-point--active")
        $(this).addClass("types__group-point--active")
        $(".types__tab").removeClass("types__tab--active")
        $(`.types__tab[data-tab-path="${path}"]`).addClass("types__tab--active")
        $(".types__group-modal").removeClass("types__group-modal--active")
        $(`.types__group-modal[data-tab-path="${path}"]`).addClass("types__group-modal--active")
    })

    $(".questions__item-btn").click(function() {
        $(this).toggleClass("questions__item-btn--active")
        $(this).parent(".questions__item-show").siblings(".questions__item-hidden").slideToggle()
    })

    $(".service-detail__mob-btn").click(function() {
        $(".service-detail").removeClass("service-detail--active")
    })

    $(".quiz-step__next").click(function() {
        let step = parseInt($(this).parents(".quiz-step").attr("data-step-path"))
        console.log(step)

        if (step < 5) {
            $(`.quiz-step`).removeClass("quiz-step--active")
            $(`.quiz-step[data-step-path="${step+1}"]`).addClass("quiz-step--active")
        }
    })

    $(".quiz-step__prev").click(function() {
        let step = parseInt($(this).parents(".quiz-step").attr("data-step-path"))
        console.log(step)

        if (step > 1) {
            $(`.quiz-step`).removeClass("quiz-step--active")
            $(`.quiz-step[data-step-path="${step-1}"]`).addClass("quiz-step--active")
        }
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
        // $(document).scrollTop(scrollTo - 200);
    }

}