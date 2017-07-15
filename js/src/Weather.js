function Weather(value){
  mylat = value.latitude;
  mylon = value.longitude;
  // apikey = ENV[WEATHER_API_KEY];
}

Weather.prototype.grab = function(){
  (function() {

    var url = "https://fcc-weather-api.glitch.me/api/current?callback=?&lat="+mylat+"&lon="+mylon+"&units=imperial";

    $.getJSON(url)
        .done(function (json) {
          returnFunc(json);
        })
        .fail(function(jqxhr,textStatus,error){
          var err = textStatus +','+error;
          console.log('Stuff got broke: '+ err);
        });

  })();
};

function returnFunc(jsonValue){
  var description = jsonValue.weather[0].description;
  var iconcode = jsonValue.weather[0].icon.toLocaleString();
  var location = jsonValue.name;
  var temp = jsonValue.main.temp;
  var speed = jsonValue.wind.speed;
  var wind = knots(jsonValue.wind.deg);

  //switch background based on temp
  temp_ranges(temp);
  cel = convert(temp);
  //toggle between F and C on button
  var icon = '<img src=https://openweathermap.org/img/w/'+iconcode+'.png>';
  var temp_on_display = temp;
  document.getElementById("icon").innerHTML = icon;
  document.getElementById("temp").innerHTML = temp_on_display;
  document.getElementById("location").innerHTML = location.toUpperCase();
  document.getElementById("description").innerHTML = description.toUpperCase();
  document.getElementById("speed").innerHTML = speed;
  document.getElementById("wind").innerHTML = wind;
  //set to animation to blank
}

function temp_ranges(temp){
  if(temp>103.9){
    //return 'ohgawdhot';
    return document.body.style.backgroundImage = "url('https://i.imgur.com/tcxnYuG.jpg')";
  }else if(temp>86 && temp<=103.8){
    //return 'hot';
    return document.body.style.backgroundImage = "url('https://i.imgur.com/CRkJkEl.jpg')";
  }else if (temp>80.6 && temp<=85.9){
    return document.body.style.backgroundImage = "url('https://i.imgur.com/Ez60K8u.jpg')";
  }else if(temp>73.4 && temp<=80.6){
    return document.body.style.backgroundImage = "url('https://i.imgur.com/gNfsNOW.jpg')";
  }else if(temp>64.4 && temp<=73.4){
    return document.body.style.backgroundImage = "url('https://i.imgur.com/kXhScmH.jpg')";
  }else if(temp>57.2 && temp<=64.4){
    return document.body.style.backgroundImage = "url('https://i.imgur.com/ko6x32N.jpg')";
  }else if(temp>50 && temp<=57.2){
    return document.body.style.backgroundImage = "url('https://i.imgur.com/LGkorF8.jpg')";
  }else if(temp>42.8 && temp<=50){
    return document.body.style.backgroundImage = "url('https://i.imgur.com/LGkorF8.jpg)";
  }else if(temp>32 && temp<=42.8){
    return document.body.style.backgroundImage = "url('https://i.imgur.com/9A7sDw0.jpg)";
  }else if(temp<=32){
    return document.body.style.backgroundImage = "url('https://i.imgur.com/Cp92UUs.jpg')";
  }
}

function convert(temp,symbol){
  //todo return both value and symbol, remove dom code. violates SOLID
  if(symbol == 'f'){
    fahval = temp;
    //(°F  -  32)  x  5/9 = °C
    celsius = (fahval - 32) * (5/9);
    celsius = celsius.toFixed(2);
    console.log(celsius);
    document.getElementById("symbol").innerHTML = "c";
    return celsius
  }else if(symbol == 'c'){
    //°C  x  9/5 + 32 = °F
    fahval = celsius * (9/5) + 32;
    fahval = fahval.toFixed(2);
    document.getElementById("symbol").innerHTML = "f";
    return fahval
  }

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
