function Weather(value){
  mylat = value.latitude;
  mylon = value.longitude;
  console.log('inside Weather class '+ mylat + ", " +mylon);
}

Weather.prototype.grab = function(){
  (function() {
    var url = "http://api.openweathermap.org/data/2.5/weather?lat="+mylat+"&lon="+mylon+"&units=imperial";
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
  var iconcode = jsonValue.weather[0].icon.toLocaleString();
  var location = jsonValue.name;
  var temp = jsonValue.main.temp;
  var speed = jsonValue.wind.speed;
  var wind = knots(jsonValue.wind.deg);

  //TODO - switch background based on temp
  temp_ranges(temp);
  cel = converter(temp);
  //TODO - toggle between F and C on button
  var icon = '<img src=http://openweathermap.org/img/w/'+iconcode+'.png>';
  var temp_on_display = temp;
  //document.getElementById("stuff").innerHTML = icon+' '+temp+'F' +'<br>'+ location +' '+ description +' '+ speed +'knots'+' '+ wind;
  document.getElementById("icon").innerHTML = icon;
  document.getElementById("temp").innerHTML = temp_on_display;
  document.getElementById("location").innerHTML = location;
  document.getElementById("description").innerHTML = description;
  document.getElementById("speed").innerHTML = speed;
  document.getElementById("wind").innerHTML = wind;
  //set to animation to blank
}

function temp_ranges(temp){
  if(temp>103.9){
    //return 'ohgawdhot';
    return document.body.style.backgroundImage = "url('images/ohgawdhot.jpg')";
  }else if(temp>86 && temp<=103.8){
    //return 'hot';
    return document.body.style.backgroundImage = "url('images/hot.jpg')";
  }else if (temp>80.6 && temp<=85.9){
    return document.body.style.backgroundImage = "url('images/verywarm.jpg')";
  }else if(temp>73.4 && temp<=80.6){
    return document.body.style.backgroundImage = "url('images/warm.jpg')";
  }else if(temp>64.4 && temp<=73.4){
    return document.body.style.backgroundImage = "url('images/moderate.jpg')";
  }else if(temp>57.2 && temp<=64.4){
    return document.body.style.backgroundImage = "url('images/mild.jpg')";
  }else if(temp>50 && temp<=57.2){
    return document.body.style.backgroundImage = "url('images/cool.jpg')";
  }else if(temp>42.8 && temp<=50){
    return document.body.style.backgroundImage = "url('images/cold.jpg')";
  }else if(temp>32 && temp<=42.8){
    return document.body.style.backgroundImage = "url('images/verycold.jpg')";
  }else if(temp<=32){
    return document.body.style.backgroundImage = "url('images/freezing.jpg')";
  }
}

function converter(temp){
  fahval = temp;
  //(°F  -  32)  x  5/9 = °C
  celsius = (fahval - 32) * (5/9);
  celsius = celsius.toFixed(2);
  return celsius
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
