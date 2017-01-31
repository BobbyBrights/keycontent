/* smooth scroll */
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

$('body').scrollspy({
    target: '#mainNav'
});

// Offset for Main Navigation
$('#mainNav').affix({
    offset: {
        top: 90
    }
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function () {
    $('.navbar-toggle:visible').click();
});


/* carousel */
$(document).ready(function () {
    $("#screenshots").owlCarousel({
        items: 4,
        itemsCustom: [
            [0, 1],
            [480, 2],
            [768, 3],
            [992, 4]
        ]
    });
    $("#owl-testi").owlCarousel
    ({
        loop: true,
        items: 1,
        lazyLoad: true,
        autoplay: true,
        dots: true,
        smartSpeed: 500
    });

    $('.owl-brands').owlCarousel({
        lazyLoad: true,
        autoWidth: true,
        autoplay: true,
        slideSpeed : 500,
        nav: false,
        //margin: 30,
        responsiveRefreshRate : 200,
        dots: false,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            600:{
                items:3
            },
            1200:{
                items:8
            }
        }
    });
    $(window).trigger('resize');
});


jQuery(document).ready(function ($) {


// site preloader -- also uncomment the div in the header and the css style for #preloader
    $('#preloader').delay(1000).fadeOut('slow', function () {
        $(this).remove();
    });

});



var countSection = $('.world-rating').offset().top - 300;

var isRun = false;
$(window).scroll(function () {

    if (!isRun && countSection < $(window).scrollTop()){

        var worldCount = new CountUp("worldCount", 0, 120, 0, 2.5, {
                useEasing : true,
                useGrouping : true,
                separator : ',',
                decimal : '.',
                prefix : '',
                suffix : 'k'
            }
        );

        var authorsCount = new CountUp("authorsCount", 0, 789, 0, 2.5, {
                useEasing : true,
                useGrouping : true,
                separator : ',',
                decimal : '.',
                prefix : ''
            }
        );

        var langCount = new CountUp("langCount", 0, 100, 0, 2.5, {
                useEasing : true,
                useGrouping : true,
                separator : ',',
                decimal : '.',
                prefix : '',
                suffix : '%'
            }
        );

        var jobsCount = new CountUp("jobsCount", 0, 168, 0, 2.5, {
                useEasing : true,
                useGrouping : true,
                separator : ',',
                decimal : '.',
                prefix : ''
            }
        );

        worldCount.start();
        authorsCount.start();
        langCount.start();
        jobsCount.start();

        isRun = true;

    }else{
        return false
    }
});


/* scrollToTop */
$(document).ready(function () {

    //Check to see if the window is top if not then display button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

});

function initMap() {

    var myLatLng = {lat: 37.769, lng: -122.446};


    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        scrollwheel: false,
        zoom: 17
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'T'
    });

    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Keycontent</h1>' +
        '<div id="bodyContent">' +
        '<p>Keycontent adrress<br/>\
            Germany, 02455<br/>\
            +4 212 226 7360<br/>\
            keycontent@keycontent.com.</p>' +
        '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

}


