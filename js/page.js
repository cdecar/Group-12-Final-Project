
function showTitle(){

  var revealTitle = document.getElementById("shown");
  if(revealTitle.style.visibility == "hidden"){
    revealTitle.style.visibility = "visible";
  }
  else{
    revealTitle.style.visibility = "hidden";
  }
}


$("p").hover(function(){
  $(this).css("color", "white");
}, function (){
  $(this).css("color", "Gray");
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
