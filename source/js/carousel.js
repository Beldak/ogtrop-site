// Initialise FlexSlider for Carousels
$(window).load(function() {
    $('.flexslider').flexslider({
    animation: "fade",
    prevText: "&le;",
    nextText: "&ge;",
    controlNav: false,
    directionNav: true,
    slideshowSpeed: 6000,
    animationSpeed: 800,
    touch: true
    });
});