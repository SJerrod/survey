$(document).ready(function() {
  $("h1#submit").click(function(event) {
    event.preventDefault();
    const backColor = $("#color").val();
    document.body.style.background = backColor;
  });
});