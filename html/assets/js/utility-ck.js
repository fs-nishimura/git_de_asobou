$(function() {
    $("a[href^=#]").click(function() {
        var e = 700, t = $(this).attr("href"), n = $(t == "#" || t == "" ? "html" : t), r = n.offset().top;
        $($.browser.safari ? "body" : "html").animate({
            scrollTop: r
        }, e, "easeInOutQuart");
        return !1;
    });
});