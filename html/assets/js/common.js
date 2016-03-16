var scroll;

document.addEventListener("DOMContentLoaded", function() {
    fallbackSvg();
});

window.addEventListener("load", function() {
    $("body").addClass("load");
    stretchBodyHeight();
});

window.addEventListener("scroll", function() {
    scroll = $(window).scrollTop();
});

function fallbackSvg() {
    $(function() {
        if (!Modernizr.svg) {
            $("img").each(function() {
                $(this).attr("src", $(this).attr("src").replace(/\.svg/gi, ".png"));
            });
        }
    });
}

function stretchBodyHeight() {
    var winH = $(window).height();
    var bodyH = $("body").innerHeight() - 84;
    var contentsH = $("#main").height();
    if (winH > bodyH) {
        var newContentsH = winH - bodyH + contentsH - 60;
        $("#main").height(newContentsH);
    }
}