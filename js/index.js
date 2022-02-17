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

function projectSlider2() {
    var swiper = new Swiper('.project .swiper-container', {
        spaceBetween: 0,
        navigation: {
            nextEl: '.project .swiper-button-next',
            prevEl: '.project .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                allowSlidePrev: true,
                allowSlideNext: true,
            },
            992: {
                slidesPerView: 'auto',
                allowSlidePrev: false,
                allowSlideNext: false,
            },
        }
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
        effect: 'fade',
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
    gallery()
    projectSlider2()

    $('.articles__link').click(function() {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($('.articles__link').attr("data-link")).select();
        document.execCommand("copy");
        $temp.remove();
        // $(this).text('Тест скопирован!');
    });

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
        let parentTabs = $(this).parent(".tabs")
        $(parentTabs).children(".tab").removeClass("tab--active")
        $(this).addClass("tab--active")
        $(parentTabs).siblings(".tab__content").removeClass("tab__content--active")
        $(parentTabs).siblings(`.tab__content[data-tab-path='${path}']`).addClass("tab__content--active")

        $('.tabs').animate({ scrollLeft: $(this).position().left }, 500);
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

    $(".tab-title").click(function() {
        let path = $(this).attr("data-title-path");
        $(".tab-title").removeClass("tab-title--active");
        $(this).addClass("tab-title--active");
        $(".news__inner-content").removeClass("news__inner-content--active");
        $(`.news__inner-content[data-title-path="${path}"]`).addClass("news__inner-content--active");
    })

    $(".questions__item-btn").click(function() {
        $(this).toggleClass("questions__item-btn--active")
        $(this).parent(".questions__item-show").siblings(".questions__item-hidden").slideToggle()
    })

    $(".project__gallery").click(function() {
        $("body").append(`<div class="backdrop"></div>`)
        $(".gallery-modal").addClass("gallery-modal--active")
        $("body").addClass("fixed-body")

        $(".backdrop").click(function() {
            $(".gallery-modal").removeClass("gallery-modal--active")
            $(".backdrop").remove()
            $("body").removeClass("fixed-body")
        })
    })


    $(".gallery-modal__close").click(function() {
        $(".gallery-modal").removeClass("gallery-modal--active")
        $(".backdrop").remove()
        $("body").removeClass("fixed-body")
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


function consultModal(id, formInfo = null) {
    $(".modal").removeClass("modal--active")
    $("body").append(`<div class="backdrop"></div>`)
    $("body").addClass("fixed-body")
    $(".consult-modal").removeClass("consult-modal--active")
    $(`#${id}`).addClass("consult-modal--active")

    $(".backdrop").click(function() {
        $(".consult-modal").removeClass("consult-modal--active")
        $(".backdrop").remove()
        $("body").removeClass("fixed-body")
    })
    $(".consult-modal__close").click(function() {
        $(".consult-modal").removeClass("consult-modal--active")
        $(".backdrop").remove()
        $("body").removeClass("fixed-body")
    })

    if (formInfo) {
        let insertedInput = `
            <input type="text" name="formTilte" style="display:none" value="${formInfo.title}">
            <input type="text" name="formButton" style="display:none" value="${formInfo.button}">
        `
        $(".consult-modal__form").prepend(insertedInput)
    }




}