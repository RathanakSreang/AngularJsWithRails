describe('Spec NavController Test', function(){
  var scope, controller;
  beforeEach(module("AngularDemo"));
  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new();
    controller = $controller("NavController", {$scope: scope});
  }));

  it('should define home help about', function(){
    expect(scope.home).toBeDefined();
    expect(scope.help).toBeDefined();
    expect(scope.about).toBeDefined();
  });

  it('should clear all value when function reset was trigger', function(){
    scope.home = "active";
    scope.help = "active";
    scope.about = "active";
    scope.reset();
    expect(scope.home).toEqual("");
    expect(scope.help).toEqual("");
    expect(scope.about).toEqual("");
  });
});
