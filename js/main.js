$(document).ready(function () {
    $("body").fadeIn(1500);

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

     $('img').each(function() {

        $(this).data('original-width', $(this).css('width'));
        $(this).data('original-height', $(this).css('height'));

        $(this).hover(function() {

            $(this).animate({
                height: "5em",
                width: "5em"
            }, 200);

        });

        $(this).mouseout(function () {
          var originalWidth = $(this).data('original-width');
          var originalHeight = $(this).data('original-height');
          $(this).animate({
            height: originalHeight,
            width: originalWidth
          }, 200);
        });
    });
});
