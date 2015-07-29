describe("Spec Route Test", function(){
  var location, route, rootScope;
  beforeEach(module("AngularDemo"));
  beforeEach(inject(function($location, $route, $rootScope){
    location = $location;
    route = $route;
    rootScope = $rootScope;
  }));

  describe('"/" path', function(){
    beforeEach(inject(function($httpBackend){
      $httpBackend.expectGET("templates/home.html").respond(200);
    }))
    it('should  load right controller with path "/" ', function(){
      location.path("/");
      rootScope.$digest();
      expect(route.current.controller).toBe ("ContactController");
    });

    it('should redirect to / and call "ContactController" when user type wrong path', function(){
      location.path("/this/the/wrong/path");
      rootScope.$digest();
      expect(route.current.controller).toBe ("ContactController");
    });
  });

  describe('"/help" path', function(){
    it('should  load right template with path "/help" ', function(){
      location.path("/help");
      rootScope.$digest();      
      expect(route.current.template).toMatch("This is help");
    });    
  });

  describe('"/about" path', function(){
    it('should  load right template with path "/about" ', function(){
      location.path("/about");
      rootScope.$digest();      
      expect(route.current.template).toMatch("This is About Page");
    });    
  });
});
