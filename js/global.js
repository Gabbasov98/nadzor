$(document).ready(function() {
    $(".select").niceSelect()
    $.fn.setCursorPosition = function(pos) {
        if ($(this).get(0).setSelectionRange) {
            $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
            var range = $(this).get(0).createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };
    $('input[type="tel"]').click(function() {
        $(this).setCursorPosition(3); // set position number
    });
    $('input[type="tel"]').mask('+7 999 999 9999', { placeholder: '+7             ' });

    $(".modal").removeClass("modal-none")
    $(".consult-modal").removeClass("modal-none")

    setTimeout(() => {
        $(".service-detail").removeClass("modal-none")
    }, 1500);


    $(".nav__item-show").click(function() {
        $(this).toggleClass("nav__item-show--active")
        $(this).siblings(".nav__item-hidden").slideToggle()
    })
    $(".footer-nav__item-show").click(function() {
        $(this).toggleClass("footer-nav__item-show--active")
            // $(this).siblings(".footer-nav__item-hidden").slideToggle()
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


})



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