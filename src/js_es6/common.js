/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// common.js
//
// @use jquery1.8~2.2.4
// @use  jQuery Easing
// @using ES62015
// @supports IE8
// 
/////////////////////////////////////////////////////////////////////////////////////////////////////
"use strict";

////////////////////////////////////////////////////////////////
// var
////////////////////////////////////////////////////////////////
var scroll;
var winW = function() {
	return $(window).width();
},
winH = function() {
	return $(window).height();
}
,getUrlParam = function() {
    var vars = {};
    var param = location.search.substring(1).split('&');
    for (var i = 0; i < param.length; i++) {
        var keySearch = param[i].search(/=/);
        var key = '';
        if (keySearch != -1) key = param[i].slice(0, keySearch);
        var val = param[i].slice(param[i].indexOf('=', 0) + 1);
        if (key != '') vars[key] = decodeURI(val);
    }
    return vars;
};


////////////////////////////////////////////////////////////////
// Events
////////////////////////////////////////////////////////////////
$(document).ready(function(){
	Init.fallbackSvg();
});

$(window).load(function(){
	$('body').addClass('load');
});

$(window).scroll(function(){
	scroll=$(window).scrollTop();
});

////////////////////////////////////////////////////////////////
// functions
////////////////////////////////////////////////////////////////
var Init = {
            setua:function(){
                var ua = navigator.userAgent;
                if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPad') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('android') > 0 || ua.indexOf('BlackBerry') > 0 || ua.indexOf('windows Phone') > 0 || ua.indexOf('NOKIA') > 0 || /Mobile.*Firefox/.test(ua)){
                        $('body').addClass('ua-sp');
                } else if(ua.indexOf("Edge") == -1) {
                    $('body').show('ua-pc');
                    if(ua.indexOf('Firefox') > 0){
                        $('body').show('ua-pc-firefox');
                    }else if(ua.indexOf('Safari') > 0){
                        $('body').show('ua-pc-safari');
                    }else if(ua.indexOf('Chrome') > 0){
                         $('body').show('ua-pc-chrome');
                    }
                }else{
                    if(ua.indexOf("Edge") == -1){
                        $('body').show('ua-pc-edge');
                    }
                }
            },
	fallbackSvg:function(){
                if (!Modernizr.svg){
                    $('img').each(function() {
                      $(this).attr('src', $(this).attr('src').replace(/\.svg/gi,'.png'));
                    });
                }
	}
}

var Effects= {
    fadeInRand : function($elem) {
        var _interval = 100;
        var _count = 0;
        var _fadeInIndexArr = new Array();
        for (var i = 0; i < $elem.length; i++) {
            _fadeInIndexArr.push(i);
        }
        _fadeInIndexArr = shuffleArr(_fadeInIndexArr);
        for (var j = 0; j < _fadeInIndexArr.length; j++) {
            $elem.eq(_fadeInIndexArr[j]).delay(_interval * _count).queue(function() {
                $(this).addClass("show").dequeue();
            });
            _count++;
        }
    }, 
    fadeIn :function($elem,interval) {
      var _interval=interval === undefined ? 200 : interval;
        var delay = 500;
        $elem.each(function(_index) {
          delay+=_interval;
              setTimeout(function() {
                    $elem.eq(_index).addClass("show");
                }, delay);
        });
    }
}

////////////////////////////////////////////////////////////////
// useful
////////////////////////////////////////////////////////////////
function shuffleArr(_array) {
    var n = _array.length, t, i;
    while (n) {
        i = Math.floor(Math.random() * n--);
        t = _array[n];
        _array[n] = _array[i];
        _array[i] = t;
    }
    return _array;
}

////////////////////////////////////////////////////////////////
// Global functions
////////////////////////////////////////////////////////////////
$.fn.tile = function(column) {
    var _selector = $(this)["selector"];
    $(_selector).height("auto");
    $(_selector).each(function(index) {
        if ((index % column) == 0) {
             var _highestH = 0;
            for(var i=column-1;i>=0;i--){
                var _tempH = $(_selector).eq(index+i).height();
                if(_tempH >= _highestH){
                    _highestH = _tempH;
                }
            }
            for(var j=column-1;j>=0;j--){
                    $(_selector).eq(index+j).height(_highestH);
            }          
        }
    });
    function getHighest(selfH, nextH) {
        var highestH = 0;
        if (selfH >= nextH) {
            highestH = selfH;
        } else {
            highestH = nextH;
        }
        return highestH;
    }
};
