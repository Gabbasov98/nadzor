$(document).ready(function() {

    $(".tab-title").click(function() {
        let path = $(this).attr("data-title-path");
        $(".tab-title").removeClass("tab-title--active");
        $(this).addClass("tab-title--active");
        $(".news__inner-content").removeClass("news__inner-content--active");
        $(`.news__inner-content[data-title-path="${path}"]`).addClass("news__inner-content--active");
    })

})