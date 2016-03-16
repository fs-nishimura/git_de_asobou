$(function() {
    initialize();
    function initialize() {
        var latitude = $("#box-map").data("latitude");
        var longitude = $("#box-map").data("longitude");
        var myLatlng = new google.maps.LatLng(latitude - 0, longitude);
        var myLatlng2 = new google.maps.LatLng(latitude - 0, longitude);
        var myOptions = {
            zoom: 17,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL
            },
            panControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
        var marker = new google.maps.Marker({
            position: myLatlng2,
            map: map,
            icon: "/img/common/pin.png"
        });
        var styleArray = [ {
            elementType: "labels",
            stylers: [ {
                visibility: "off"
            } ]
        }, {
            stylers: [ {
                saturation: -100
            }, {
                lightness: 48
            } ]
        } ];
        var styleArray2 = [ {
            elementType: "labels",
            stylers: [ {
                visibility: "on"
            } ]
        }, {
            stylers: [ {
                saturation: -100
            }, {
                lightness: 48
            } ]
        } ];
        map.setOptions({
            styles: styleArray
        });
        $("#map_canvas").hover(function() {
            map.setOptions({
                styles: styleArray2
            });
        }, function() {
            map.setOptions({
                styles: styleArray
            });
        });
        $("#map_canvas").on("touchstart", function() {
            map.setOptions({
                styles: styleArray2
            });
        });
        $("#map_canvas").on("touchend", function() {
            map.setOptions({
                styles: styleArray
            });
        });
    }
});