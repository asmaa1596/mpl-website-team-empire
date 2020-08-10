$(document).ready(function() {
    // Activate Carousel
    $("#demo").carousel();

    // Enable Carousel Indicators
    $(".item1").click(function() {
        $("#demo").carousel(0);
    });
    $(".item2").click(function() {
        $("#demo").carousel(1);
    });
    $(".item3").click(function() {
        $("#demo").carousel(2);
    });

    // Enable Carousel Controls
    $(".carousel-control-prev").click(function() {
        $("#demo").carousel("prev");
    });
    $(".carousel-control-next").click(function() {
        $("#demo").carousel("next");
    });
});


function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(51.508742, -0.120850),
        zoom: 5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}