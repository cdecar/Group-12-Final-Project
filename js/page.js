
$("h1").hover(function(){
  $(this).css("color", "purple");
}, function (){
  $(this).css("color", "MediumSlateBlue");
});

$("p").hover(function(){
  $(this).css("color", "LightBlue");
}, function (){
  $(this).css("color", "SkyBlue");
});

$("titleFrame").hover(function(){
  $(this).css("background-color", "rgba(0,0,0,.25)");
}, function (){
  $(this).css("background-color", "rgba(0,0,0,.15)");
});

$("bodyFrame").hover(function(){
  $(this).css("background-color", "rgba(0,0,0,.25)");
}, function (){
  $(this).css("background-color", "rgba(0,0,0,.15)");
});
