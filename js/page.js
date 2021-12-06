

$("p").hover(function(){
  $(this).css("color", "white");
}, function (){
  $(this).css("color", "Gray");
});

$(".titleFrame").hover(function(){
  $(this).css("color", "white");
}, function (){
  $(this).css("color", "Gray");
});

$("bodyFrame").hover(function(){
  $(this).css("background-color", "rgba(0,0,0,.25)");
}, function (){
  $(this).css("background-color", "rgba(0,0,0,.15)");
});
