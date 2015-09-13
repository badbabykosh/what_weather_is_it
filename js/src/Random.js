function RandomInit(){

}

RandomInit.prototype.quote = function(){
  (function() {
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?")
        .done(function (json) {
          console.log('json: '+json.quoteText);
          document.getElementById("stuff").innerHTML = json.quoteText;
          //TODO how to return value from here?
          //return json.quoteText;
        })
        .fail(function(jqxhr,textStatus,error){
          var err = textStatus +','+error;
          console.log('Shiz got broke: '+ err);
        });
  })();
};

