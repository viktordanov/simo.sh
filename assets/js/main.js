 $(document).ready(function () {
    $('#aboutDiv').hide();
    // $('#projectsDiv').hide();
    $('#linksDiv').hide();

    $('.sidenav').sidenav();
    $('.parallax').parallax();

    $('#aboutA').click(function() {
        $('#aboutDiv').slideToggle();
    });

    $('#projectsA').click(function() {
        $('#projectsDiv').slideToggle();
    });

    $('#linksA').click(function() {
        $('#linksDiv').slideToggle();
    });
// $('#goToLinks').click(function({
// $('html, body').animate({
// scrollTop: $("#links").offset().top
// }, 500); 
// }));
 });