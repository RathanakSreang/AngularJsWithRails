angular.module("AngularDemo").controller("ContactController", [ "$scope", "Contact", function ( $scope, Contact) {
  $scope.contacts = [];  
  $scope.contacts = Contact.contact_datas;
  $scope.contact = {
    name: "",
    email: "",
    description: ""
  }

  $scope.create = function(){
    Contact.create($scope.contact).success(function(){
      $scope.contact = null;      
    });    
  }

  $scope.delete = function(id){
    Contact.destroy(id);
  }
}]);
