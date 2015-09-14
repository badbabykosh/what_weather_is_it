describe("Weather",function(){
  var whatitis;

  beforeEach(function(){
    whatitis = new Weather();
  });

  describe('grab',function(){
    it('should return a string',function(){
      whatitis.grab();
      // HOW TO TEST SUCCESS RESPONSE???
      expect().toBe(string);
    })
  });

});