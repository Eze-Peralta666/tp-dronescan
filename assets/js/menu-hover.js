$(".dropdown").hover(function() {
    $(this).find(".dropdown-menu").stop(true, true).slideDown(300);
  }, function() {
    $(this).find(".dropdown-menu").stop(true, true).slideUp(300);
});