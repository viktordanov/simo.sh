$(document).ready(function () {

$('#goToLinks').click(function({
$('html, body').animate({
scrollTop: $("#links").offset().top
}, 500); 
}));
});