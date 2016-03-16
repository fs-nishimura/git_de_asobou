jQuery.event.add(window, "load", function() {
    size_set();
});

function size_set() {
    CIMG_INIT();
}

var CIMG_WRAP = $(".cimg_wrap");

function CIMG_INIT() {
    CIMG_WRAP.each(function() {
        var CIMG = $(this).find("img.cimg");
        var CI = new Image();
        CI.src = CIMG.attr("src");
        var CI_W = CI.width;
        var CI_H = CI.height;
        var CIMG_RATIO = CI_H / CI_W;
        var CIMG_W = CIMG.width();
        var CIMG_H = CIMG.height();
        var CIMG_WRAP_W = $(this).width();
        var CIMG_WRAP_H = $(this).height();
        var CIMG_WRAP_RATIO = CIMG_WRAP_H / CIMG_WRAP_W;
        if ($(this).parent("#Mainpic2").length != 0) {
            if (CIMG_RATIO >= CIMG_WRAP_RATIO) {
                CIMG.css({
                    width: "100%",
                    height: "auto"
                });
                var Difference = CIMG_WRAP_H - CIMG_H;
                CIMG.css({
                    left: "0",
                    top: "0"
                });
            } else {
                CIMG.css({
                    width: "auto",
                    height: "100%"
                });
                var Difference = CIMG_WRAP_W - CIMG_W;
                CIMG.css({
                    top: "0",
                    left: Difference / 2
                });
            }
        } else {
            if (CIMG_RATIO >= CIMG_WRAP_RATIO) {
                CIMG.css({
                    width: "100%",
                    height: "auto"
                });
                var Difference = CIMG_WRAP_H - CIMG_H;
                CIMG.css({
                    left: "0",
                    top: Difference / 2
                });
            } else {
                CIMG.css({
                    width: "auto",
                    height: "100%"
                });
                var Difference = CIMG_WRAP_W - CIMG_W;
                CIMG.css({
                    top: "0",
                    left: Difference / 2
                });
            }
        }
    });
}