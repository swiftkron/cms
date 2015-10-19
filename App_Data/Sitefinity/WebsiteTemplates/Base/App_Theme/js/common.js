$(document).ready(function () {
    // Common vars 
    var width = $(window).width();
    // Custom Functions
    $(document).click(function () {
        $('.uDropdown').hide();
    });
    $('.uBrand').click(function (event) {
        event.stopPropagation();
        location.href = "/";
    });
    $('.uIntl').click(function (event) {
        event.stopPropagation();
        $('.lang').slideToggle(400);
    });
    $('.navToggle').click(function (event) {
        event.stopPropagation();
        $('nav').slideToggle(400);
    });
    $('.uToggle').click(function (event) {
        event.stopPropagation();
        $('.uAlt').slideToggle(400);
    });
    // Modal Window
    $('.modalClose').click(function () {
        $('.modal').css('opacity', '0');
        $('.modal').css('pointer-events', 'none');
    });
});