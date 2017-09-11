var toggle = 0;

$("button").on("click", function() {
  
  if (toggle) {
    $("body").css("font-size", "36px");
    toggle = 0;
  } else {
    $("body").css("font-size", "16px");
    toggle = 1;
  }
  
});