$(document).ready(function(){
  var redClick=0;
  var yellowClick=0;
  var greenClick=0;
  var blueClick=0;
  $("button").on("click", function(event){
    var color=$(this).text().toLowerCase();
    switch(color){
      case "red":
        redClick++;
        $("#red").text(redClick);
        $(".container").append("<div class=\"red color-cube\"></div>");
        break;
      case "yellow":
        yellowClick++;
        $("#yellow").text(yellowClick);
        $(".container").append("<div class=\"yellow color-cube\"></div>");
        break;
      case "green":
        greenClick++;
        $("#green").text(greenClick);
        $(".container").append("<div class=\"green color-cube\"></div>");
        break;
      case "blue":
        blueClick++;
        $("#blue").text(blueClick);
        $(".container").append("<div class=\"blue color-cube\"></div>");
        break;
      default:
        console.log("not an option");
    }
  });
});
