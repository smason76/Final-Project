$(document).ready(function () {
    
    $('.dropdown').hover(
        function () {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideDown('slow');
            $(this).toggleClass('open');
        },
        function () {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideUp('slow');
            $(this).toggleClass('open');
        }
    );
});