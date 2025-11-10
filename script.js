$(document).ready(function() {
  $("h2").click(function() {
    $(this).next("ul, p").slideToggle();
  });
});
