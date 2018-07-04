$(document).ready(function () {
    // HIDING DIVS  
    $('#aboutDiv').hide();
    $('#projectsDiv').hide();
    $('#linksDiv').hide();

    // INIT MATERIALIZECSS COMPONENETS
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    
    // NORMAL TITLE CLICKS
    $('#aboutA').click(function () {
        $('#aboutDiv').slideToggle();
    });

    $('#projectsA').click(function () {
        $('#projectsDiv').slideToggle();
    });

    $('#linksA').click(function () {
        $('#linksDiv').slideToggle();
    });

    // PC NAVBAR BUTTONS
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

    $('#linksButton').click(function () {
        $('html, body').animate({
            scrollTop: $("#linksAnchor").offset().top
        }, 600)
        $('#linksDiv').slideDown(800);
    });

    // MOBILE SIDENAV BUTTONS

    $('#aboutButtonM').click(function () {
        $('html, body').animate({
            scrollTop: $("#aboutAnchor").offset().top
        }, 400)
        $('#aboutDiv').slideDown(800);
        $('.sidenav').sidenav().close();
    });

    $('#projectsButtonM').click(function () {
        $('html, body').animate({
            scrollTop: $("#projectsAnchor").offset().top
        }, 400)
        $('#projectsDiv').slideDown(800);
        $('.sidenav').sidenav().close();
    });

    $('#linksButtonM').click(function () {
        $('html, body').animate({
            scrollTop: $("#linksAnchor").offset().top
        }, 600)
        $('#linksDiv').slideDown(800);
        $('.sidenav').sidenav().close();
    });
  
    // BACK BUTTON
    $('#back').click(function () {
        $('html, body').animate({
            scrollTop: $("#mainAnchor").offset().top
        }, 400)
    });

});