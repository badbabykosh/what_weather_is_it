function Weather(){
  myArray = [];
}

Weather.prototype.grab = function(){
  (function() {
    var url = "http://api.openweathermap.org/data/2.5/weather?lat=34.0194&lon=-118.4912&units=imperial";
    //var url = "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139";
    $.getJSON(url)
        .done(function (json) {
          returnFunc(json);
        })
        .fail(function(jqxhr,textStatus,error){
          var err = textStatus +','+error;
          console.log('Shiz got broke: '+ err);
        });

  })();
};

function returnFunc(jsonValue){
  var description = jsonValue.weather[0].description;
  var location = jsonValue.name;
  var temp = jsonValue.main.temp;
  var speed = jsonValue.wind.speed;
  var wind = knots(jsonValue.wind.deg);



  document.getElementById("stuff").innerHTML =
      temp+'F' +'<br>'+ location +' '+ description +' '+ speed +'knots'+' '+ wind;
}
function knots(value){
    console.log('knots '+value);
    //var newval = ''
    if (value = 0 || 360) {
      return 'N';
    }else if(value > 1 && value <= 22.5){
      return 'NNE';
    }else if(value > 22.5 && value <= 45){
      return 'NE';
    }else if( value > 45 && value <= 67.5){
      return 'ENE';
    }else if(value > 67.5 && value <= 90){
      return 'E';
    }else if( value > 90 && value <= 112.5){
      return 'ESE';
    }else if(value > 112.5 && value <= 135){
      return 'SE';
    }else if(value > 135 && value <= 157.5) {
      return 'SSE';
    }else if(value >157.5 && value <= 180) {
      return 'S';
    }else if(value >180 && value <= 202.5) {
      return 'SSW';
    }else if(value >202.5 && value <= 225) {
      return 'SW';
    }else if( value >225 && value <= 247.5) {
      return 'WSW';
    }else if(value >247.5 && value <= 270) {
      return 'W';
    }else if(value > 270 && value <= 292.5) {
      return 'WNW';
    }else if(value > 292.5 && value <= 315) {
      return 'NW';
    }else if(value >315 && value <= 337.5) {
      return 'NNW';
    }else if(value >337.5 && value <= 360) {
      return 'N';
    }
}
