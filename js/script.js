$(function () {
    $(".js-nav-toggle").on("click", function () {
        $(this).toggleClass("toggler__icon--open");
        $(".js-navigation").toggleClass("navigation--open");
    });
});

$(document).ready(function () {
    $('a[href*=#]').bind('click', function (e) {
        e.preventDefault();

        let target = $(this).attr("href");

        $('html, body').stop().animate({ scrollTop: $(target).offset().top }, 500, function () {
            location.hash = target;
        });

        return false;
    });
});

$(".tabs-nav li").click(function (e) {
    var a = $(this),
        parent = a.parents(".tabs"),
        nav = parent.children(".tabs-nav").children("li"),
        box = parent.children(".tabs-box").children("div");

    if (!a.hasClass("active")) {
        a.addClass("active").siblings().removeClass("active");

        box.eq(a.index()).addClass("active").siblings().removeClass("active");
    }

    e.preventDefault();
});