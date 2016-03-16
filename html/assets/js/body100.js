$(window).load(function() {
    var winH = $(window).height();
    var bodyH = $("body").innerHeight() - 84;
    var contentsH = $("#main").height();
    if (winH > bodyH) {
        var newContentsH = winH - bodyH + contentsH;
        $("#main").height(newContentsH);
    }
});