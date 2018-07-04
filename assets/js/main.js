$(document).ready(function () {
    $('#aboutDiv').hide();
    $('#projectsDiv').hide();
    $('#linksDiv').hide();

    $('.sidenav').sidenav();
    $('.parallax').parallax();

    $('#aboutA').click(function () {
        $('#aboutDiv').slideToggle();
    });

    $('#projectsA').click(function () {
        $('#projectsDiv').slideToggle();
    });

    $('#linksA').click(function () {
        $('#linksDiv').slideToggle();
    });

    $('#aboutButton').click(function () {
        $('html, body').animate({
            scrollTop: $("#aboutAnchor").offset().top
        }, 400)
        $('#aboutDiv').slideDown(800);
    });

    $('#projectsButton').click(function () {
        $('html, body').animate({
            scrollTop: $("#projectsAnchor").offset().top
        }, 400)
        $('#projectsDiv').slideDown(800);
    });

    $('linksButton').click(function () {
        $('html, body').animate({
            scrollTop: $("#linksAnchor").offset().top
        }, 400)
        $('#linkDiv').slideDown(800);
    });

});