$(window).on('scroll load', function() {
    if ($(".navbar").offset().top > 60) {
        $(".navbar_container").addClass("top-nav-collapse");
    } else {
        $(".navbar_container").removeClass("top-nav-collapse");   
    }
});