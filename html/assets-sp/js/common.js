function bodyHeight100(){var t=$(window).height(),i=$("body").innerHeight()-84,e=$("#main").height();if(t>i){var E=t-i+e-60;$("#main").height(E)}}function size_set(){WINW=WIN.width(),WINH=WIN.height(),HEADERH=HEADER.height(),HEADERW=HEADER.width(),FOOTERH=FOOTER.height(),FOOTERW=FOOTER.width()}var WIN=$(window),WINW,WINH,BODY=$("body"),WRAP=$("#wrapAll"),MAIN=$("#main"),HEADER=$("header"),HEADERH=HEADER.height(),HEADERW=HEADER.width(),FOOTER=$("footer"),FOOTERH=FOOTER.height(),FOOTERW=FOOTER.width();WIN.ready(function(){}),WIN.load(function(){size_set(),bodyHeight100(),BODY.addClass("load")}),WIN.resize(function(){size_set()});var SCROLL=0;WIN.scroll(function(){SCROLL=WIN.scrollTop()}),jQuery.event.add(window,"load",function(){size_set()});for(var PAGE_PATH=location.pathname,HIERARCHY=location.href.split("/"),DIRECTORY=HIERARCHY[3],DIRECTORY2=HIERARCHY[4],PAGE_PATH2="/"+DIRECTORY+"/"+DIRECTORY2,GNAV=$(".gnav li a"),GNAV_LEN=GNAV.length,GNAV_A_LINK,L=0;GNAV_LEN>L;L++)GNAV_A_LINK=GNAV.eq(L).attr("href"),(GNAV_A_LINK=="/"+DIRECTORY+"/"||GNAV_A_LINK==PAGE_PATH||GNAV_A_LINK==PAGE_PATH2)&&GNAV.eq(L).addClass("current");$("#totop").click(function(){var t="body",i=navigator.userAgent;(i.match(/MSIE/)||i.match(/Trident/)||i.match(/Firefox/))&&(t="html");var e=Math.abs(SCROLL),E=600,A=3177,a=Math.floor(e/E*100),n=$(window).height();a=E*n/A,$(t).animate({scrollTop:0},a,"easeInOutSine")});