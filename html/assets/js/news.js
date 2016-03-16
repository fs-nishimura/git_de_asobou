$(document).ready(function() {
    var prevBtn = $("a[rel='prev']");
    var nextBtn = $("a[rel='next']");
    if (!nextBtn.length) {
        $(".wp-pagenavi").append('<a class="nextpostslink disabled" rel="next" href="javascript:void(0);"><img src="/img/news/index/btn-next.png" alt="NEXT" width="39" height="10"></a>');
    } else if (!prevBtn.length) {
        $(".wp-pagenavi").prepend('<a class="previouspostslink disabled" rel="prev" href="javascript:void(0);"><img src="/img/news/index/btn-prev.png" alt="PREV" width="38" height="10"></a>');
    }
});