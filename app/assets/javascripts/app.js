myApp = angular.module("AngularDemo", ["ngAnimate","ngRoute", "ngResource"]);

myApp.config(function($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $routeProvider
  .when("/", {
    templateUrl: "templates/home.html",
    controller: "ContactController",
    resolve: {
      postPromise: ["Contact", function(Contact){
        return Contact.getAll();
      }]
    }
  })
  .when("/help",{
    template: "<center><h1>This is help</h1></center>"
  })
  .when("/about",{
    template: "<center><h1>This is About Page</h1></center>"
  })
  .otherwise({ redirectTo: '/' });  
});
