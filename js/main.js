$(document).ready(function () {
    $("body").fadeIn(1500);

    $(".nav-item").click(function() {
      $(".navbar-toggler").attr("aria-expanded", false);
      $(".navbar-toggler").addClass("collapsed");
      $(".navbar-collapse.collapse.show").removeClass("show");
    })
});
