function showMore(){var e=150,a=$("a.media_link.set.show").length,t=$("a.media_link.set.show").length+8;for(a;t>a;a++)$("a.media_link").eq(a).addClass("set"),$("a.media_link").eq(a).delay(e).queue(function(){$(this).addClass("show").dequeue()}),e+=150;$("a.media_link").length>=8&&$("#main").css("height","auto")}function callAjax(e){$("#button-flag").remove(),$(".more").remove(),$.ajax({type:"GET",scriptCharset:"utf-8",url:"../mediaapi/",timeout:3e3,data:{media_offset:e},success:function(e){$("div.list").append(e),$("#button-flag").length&&$(".section_wrap").append('<a href="javascript:void(0);" class="more"><span><img src="/img/top/btn-more.png" alt="MORE" width="90" height="90"></span></a>')},error:function(e,a,t){"timeout"==a&&$("html").html("データをダウンロードできませんでした。")},complete:function(){showMore()}})}var countOrder=0,countEnd=10,countLoaded=0,clickCount=0,changeFlag=!1,hoverFlag=!1,BTN_MORE=$(".more"),LI=$("a.media_link"),LI_LEN=LI.length;$(window).load(function(){showMore()}),$(document).on("click",".more",function(){var e=$("a.media_link.set.show").length;callAjax(e)});