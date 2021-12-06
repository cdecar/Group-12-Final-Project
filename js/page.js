

$("p").hover(function(){
  $(this).css("font-size", "40px");
}, function (){
  $(this).css("font-size", "30px");
});

$(".titleFrame").hover(function(){
  $(this).css("font-size", "65px");
}, function (){
  $(this).css("font-size", "55px");
});

$("bodyFrame").hover(function(){
  $(this).css("background-color", "rgba(0,0,0,.25)");
}, function (){
  $(this).css("background-color", "rgba(0,0,0,.15)");
});
