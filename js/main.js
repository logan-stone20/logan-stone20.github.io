$(document).ready(function () {
    $("body").fadeIn(1000);
     $('#resume-button,#email,#top').each(function() {

        $(this).data('original-size', $(this).css('fontSize'));

        $(this).mouseenter(function() {

            $(this).animate({
                fontSize: "30px"
            }, 200);

        });

        $(this).mouseout(function () {
          var originalSize = $(this).data('original-size');
          $(this).animate({
            fontSize: originalSize
          }, 200);
        });
    });
});
