$("a[href^=#]").click(function() {
    var DISTANCE = Math.abs(SCROLL);
    var SPEED = 600;
    var BASEH = 3177;
    var TIME = Math.floor(DISTANCE / SPEED * 100);
    var WINH = $(window).height();
    TIME = SPEED * WINH / BASEH;
    var speed = 600;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    var body = "body";
    var ua = navigator.userAgent;
    if (ua.match(/MSIE/) || ua.match(/Trident/) || ua.match(/Firefox/)) {
        body = "html";
    }
    $(body).animate({
        scrollTop: position
    }, TIME, "easeInOutSine");
    return false;
});

$("#totop").click(function() {
    var body = "body";
    var ua = navigator.userAgent;
    if (ua.match(/MSIE/) || ua.match(/Trident/) || ua.match(/Firefox/)) {
        body = "html";
    }
    var DISTANCE = Math.abs(SCROLL);
    var SPEED = 600;
    var BASEH = 3177;
    var TIME = Math.floor(DISTANCE / SPEED * 100);
    var WINH = $(window).height();
    TIME = SPEED * WINH / BASEH;
    $(body).animate({
        scrollTop: 0
    }, TIME, "easeInOutSine");
});