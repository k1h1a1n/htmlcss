
// tab js start //

$(document).ready(function(){
  $(".tabs-control a:first").addClass("current");

  $('.tabs-control a').click(function (e) {
    e.preventDefault();
    var _href = $(this).attr("href");
    $(".tabs-control a").removeClass("current");
    $(this).addClass("current");
    $(".tabs-content > div").hide();
    $(_href).fadeIn();
  });
})

// tab js end //