/////////////////////////////////////////////////////////////////////////////////////////////////////
//
// common.js
// - Use jQuery v2.1.4 ( v1.9 for IE8 and below )
// - Use  jQuery Easing
//
/////////////////////////////////////////////////////////////////////////////////////////////////////
"use strict";

////////////////////////////////////////////////////////////////
// var
////////////////////////////////////////////////////////////////
var scroll,
mousewheelevent = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll',
winW = function() {
    return $(window).width();
},
winH = function() {
    return $(window).height();
},
getUrlParam = function() {
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
},
allImage = document.getElementsByTagName("img"),
Modal=new Modal(),
History=new History(),
Init=new Init();


////////////////////////////////////////////////////////////////
// Event
////////////////////////////////////////////////////////////////
$(document).ready(function(){
   Init.ready();
});
$(window).load(function(){
  Init.load();
});

var timer = false;
$(window).resize(function() {
    if (timer !== false) {
        clearTimeout(timer);
    }
    timer = setTimeout(function() {
        Init.resize();
    }, 200);
});

var timerS = false;
$(window).scroll(function(){
  if (timerS !== false) {
        clearTimeout(timerS);
    }
    timerS = setTimeout(function() {
        Init.resize();
    }, 200);
  scroll = $(window).scrollTop();
});

////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////

function progress(){
    progress.prototype.start = function(){
       if (!_timer) {
        _timer = setInterval(_root.proceed, 33);
      }
      for (var i = 0; i < allImage.length; i++) {
    allImage[i].addEventListener("load", function(){
      progress.loading();
    });
}
    },
    progress.prototype.loading = function(){
     loaded_counter++;
    },
    progress.prototype.proceed = function(){
          loaded_counter++;
           if (now_position > 99.9) {
              now_position = 100;
              _root.end();
          }
          var target_position = (loaded_counter/allImage.length) * 100;
           now_position+= (target_position - now_position) * 0.2;
           $("#progress").width(now_position + "%");
          
    },
    progress.prototype.end = function(){
         clearInterval(_timer);
        _timer = null;
        $("#progress").addClass('hide');
        $(".l-main").addClass('load');
    }
}

// ------

function Init() {
    var self = this;
    Init.prototype.ready = function() {
            self.setua();
            self.preventImgSave();

            // set current class
            $("header a").each(function() {
                var _url = $(this).attr("href");
                var _dir = getCurrentDir();
                if (_url == _dir) {
                    $(this).addClass('current');
                }
            });

            // svg fallback
            if (!Init.support("svg")) {
              $("img").each(function() {
                $(this).attr("src", $(this).attr("src").replace(/\.svg/gi, ".png"));
                });
            }
        },
        Init.prototype.load = function() {
          $("body").addClass("load");
        },
        Init.prototype.resize = function() {
        },
        Init.prototype.setua = function() {
            var ua = navigator.userAgent;
            if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPad') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('android') > 0 || ua.indexOf('BlackBerry') > 0 || ua.indexOf('windows Phone') > 0 || ua.indexOf('NOKIA') > 0 || /Mobile.*Firefox/.test(ua)) {
                $('body').addClass('ua-sp');
            } else {
                $('body').addClass('ua-pc');
                if (ua.indexOf('Firefox') > 0) {
                    $('body').addClass('ua-pc-firefox');
                } else if (ua.indexOf('Chrome') > 0) {
                    $('body').addClass('ua-pc-chrome');
                } else if (ua.indexOf('Safari') > 0) {
                    $('body').addClass('ua-pc-safari');
                }
            }
        },
        Init.prototype.stretchBodyHeight = function() {
            // var winH = $(window).height();
            // var bodyH = $("body").innerHeight() - 84;
            // var contentsH = $("#main").height();
            // if (winH > bodyH) {
            //     var newContentsH = (winH - bodyH) + contentsH - 60;
            //     $("#main").height(newContentsH);
            // }
        },
        Init.prototype.support=function(option){
          if(option=="svg"){
            return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.0");
          }
        },
        Init.prototype.preventImgSave=function(){
            $("img.nosave").on("contextmenu",function(){
                return false;
            });
            var _timer;
            $("img.nosave").on("touchstart",function(){
                _timer = setTimeout(function(){
                    alert("画像は保存できません")
                },500)
                return false;
            });
            $("img.nosave").on("touchend",function(){
                clearTimeout(_timer);
                return false;
            });
        } 
}

// ------

function Slider(options) {
    options = $.extend({
        speed: 3000,
        total: $(".slider-pic li").length,
        effect: "fade",
        easing: $.easing.slider
    }, options);
    var timer,
        index = 0,
        prev = options.total - 1,
        self = this;
    Slider.prototype.init = function() {
            var ctr = "";
            for (var i = 0; i < options.total; i++) {
                ctr += "<li><a href='javascript:void(0);'><span></span></a></li>";
            }
            $(".slider-ctr").append(ctr);
            self.loop();
        },
        Slider.prototype.increment = function(increment) {
            var _increment = increment === undefined ? true : increment;
            if (_increment) {
                // increment
                index = (index >= (options.total - 1)) ? 0 : index + 1;
                prev = (prev >= (options.total - 1)) ? 0 : prev + 1;
            } else {
                // decrement
                index = (index <= 0) ? (options.total - 1) : index - 1;
                prev = (prev <= 0) ? (options.total - 1) : prev - 1;
            }
            Slider.move(index, prev);
        },
        Slider.prototype.getPrev = function(_index) {
            index = _index;
            prev = ((_index - 1) < 0) ? (options.total - 1) : _index - 1;
        },
        Slider.prototype.move = function(_index, _prev) {
            $(".slider-pic li,.slider-txt li").removeClass("active hide");
            $(".slider-pic li").eq(_index).addClass("active");
            $(".slider-pic li").eq(_prev).addClass("hide");
            $(".slider-txt li").eq(_index).addClass("active");
            $(".slider-txt li").eq(_prev).addClass("hide");
        },
        Slider.prototype.loop = function() {
            timer = setTimeout(function() {
                self.increment();
                self.loop();
            }, options.speed);
        },
        Slider.prototype.stop = function() {
            clearTimeout(timer);
        }
}


// -----


function Modal() {
    var self = this,
        player,
        playable = false,
        player;
    Modal.prototype.init = function() {
        var _hash = window.location.hash;
                    if (_hash.indexOf("video-") > -1) {
                        Modal.create(_hash);
                        Modal.open(_hash);
                    } else if (_hash) {
                     Modal.open(_hash);   
                    }
        },
        Modal.prototype.create = function(id) {
            var _videoid = id.split("video-")[1];
            $(".modal-video").attr("id", id.replace("#", ""));
            if (!playable) {
                var _script = document.createElement('script');
                _script.src = "https://www.youtube.com/iframe_api";
                var _firstScript = document.getElementsByTagName('script')[0];
                _firstScript.parentNode.insertBefore(_script, _firstScript);
                window.onYouTubeIframeAPIReady = function loadPlayer() {
                    player = new YT.Player('youtube-wrap', {
                        height: '410',
                        width: '728',
                        videoId: _videoid,
                        showinfo: '0',
                        playerVars: { 'showinfo': 0, 'autohide': 1, 'controls': 0, 'rel': 0, 'loop': 0 },
                        events: {
                            'onReady': onPlayerReady,
                            'onStateChange': onPlayerStateChange
                        }
                    });
                }
            } else {
                player = new YT.Player('youtube-wrap', {
                    height: '410',
                    width: '728',
                    videoId: _videoid,
                    showinfo: '0',
                    playerVars: { 'showinfo': 0, 'autohide': 1, 'controls': 0, 'rel': 0, 'loop': 0 },
                    events: {
                        'onReady': onPlayerReady,
                        'onStateChange': onPlayerStateChange
                    }
                });
            }
            function onPlayerStateChange(event) {
                if (event.data == YT.PlayerState.ENDED) {
                    modalClose();
                } else {
                }
            }
            function onPlayerReady(event) {
                console.log(player.length);
                if (player) {
                    playable = true;
                    player.playVideo();
                }
            }
        },
        Modal.prototype.checkStatus = function() {
            if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
                return false;
            } else {
                return true;
            }
        },
        Modal.prototype.open = function(id) {
            $("body").addClass('modal-show');
            $(id).addClass('show');
        },
        Modal.prototype.close = function() {
            if (playable) {
                player.pauseVideo();
                $("#youtube-wrap").remove();
                $(".modal-video .modal").append("<div id='youtube-wrap'></div>");
                playable=false;
            }
            $("body").removeClass('modal-show');
            $(".modal-wrap,modal-bg").removeClass('show');
            $(".btn-modal").removeClass('show current');
            History.changeUrl(location.href.split('#')[0], $("title").text());
        }
}

// -----

function History() {
    var self = this;
    History.prototype.checkStatus = function(elem) {
            var _url = $(elem).attr("href");
            if ($(elem).hasClass('btn-ajax')) {
                var _dir = getCurrentDir();
                if (_url == _dir) {
                    return false;
                } else {
                    return true;
                }
            } else {
                return true;
            }
        },
        History.prototype.changeUrl = function(link, title) {
            if (!History.applyFallback()) {
                var _newLink = link;
                document.title = title;
                history.pushState('', '', _newLink);
            } else {
                location.href = link;
            }
        },
        History.prototype.popstateHandler = function(e) {
            e.preventDefault();
            var _dir = location.href;
            if (_dir.indexOf("#") > -1) {
                // hashchange
                History.changeUrl(location.href, $("title").text());
            } else {
                self.getData(location.pathname);
            }

        },
        History.prototype.applyFallback = function() {
            if (window.history && window.history.pushState) {
                return false;
            } else {
                return true;
            }
        }
}

////////////////////////////////////////////////////////////////
// useful
////////////////////////////////////////////////////////////////
function shuffleArr(_array) {
    var n = _array.length,
        t, i;
    while (n) {
        i = Math.floor(Math.random() * n--);
        t = _array[n];
        _array[n] = _array[i];
        _array[i] = t;
    }
    return _array;
}

function getCurrentDir() {
    var dir = document.location.pathname;
    dir = dir.slice(0, dir.length);
    dir = (dir.charAt(dir.length - 1) == "/" && dir.length > 1 ? dir.slice(0, dir.length - 1) : dir);
    if (getUrlParam()["cat"] !== undefined) {
        dir = dir + "/?cat=" + getUrlParam()["cat"];
    }
    return dir;
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
            for (var i = column - 1; i >= 0; i--) {
                var _tempH = $(_selector).eq(index + i).height();
                if (_tempH >= _highestH) {
                    _highestH = _tempH;
                }
            }
            for (var j = column - 1; j >= 0; j--) {
                $(_selector).eq(index + j).height(_highestH);
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

$.fn.scriptLoaded = function() {
    var $scripts = this.find('script[src!=""]');
    if (!$scripts.length) {
        return $.Deferred().resolve().promise(); }

    var dfds = [];
    $scripts.each(function() {
        var dfd = $.Deferred();
        dfds.push(dfd);
        this.onload = function() { dfd.resolve(); }
        this.onreadystatechange = function() {
            if (this.readyState == "loaded" || this.readyState == "complete") {
                dfd.resolve();
            }
        }
    });
    return $.when.apply($, dfds);
}