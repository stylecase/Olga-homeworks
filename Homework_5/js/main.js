
/* When you are inside of the form get the value from the input box
if the city name is NYC
then display nyc bg image
if the city name is LA
then display LA bg images...
if city name is not in the list then go to default image
*/
$(document).ready(function(){
  $("#city-form").submit(function() {
     event.preventDefault();
     //.trim remove extra spacing with
     //.toLowerCase converts to lower case and compares to the values
     var cityName = $("input:text").val().trim().toLowerCase();
     //var cityName = $("#city-type").val();
     // Alternative method: remove all the classes if we use remove and add method
     //$('body').removeClass(); and then add class
     if (cityName === "nyc" || cityName === "new york" || cityName === "new york city" || cityName === "ny"){
      $("body").css("background-image" , "url(images/nyc.jpg");
      //$("#city-type").attr('placeholder', 'Enter a city name...');
      // go back to a placeholder
      console.log('you input NYC!');
    } else if (cityName === "la" || cityName === "los angeles" ){
      $("body").css("background-image", "url(images/la.jpg)");
      console.log('you input LA!');
    } else if (cityName === "san francisco" || cityName === "sf" || cityName === "bay area" ){
      $("body").css("background-image", "url(images/sf.jpg)");
      console.log('you input SF!');
    } else if (cityName === "austin" || cityName === "atx"){
      $("body").css("background-image", "url(images/austin.jpg)");
      console.log('you input Austin');
    } else if (cityName === "sydney" || cityName === "syd"){
      $("body").css("background-image", "url(images/sydney.jpg)");
      console.log('you input Sydney');}
    else {$("body").css("background-image", "url(images/citipix_skyline.jpg)");
      console.log('You city is not here');
    }
    //reset to default placeholder text after user entered value
    $("#city-form")[0].reset();
  });
});
