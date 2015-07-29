angular.module("AngularDemo").factory('Contact', ["$http", function ($http) {
  var contact_obj={
    contact_datas: []    
  };

  contact_obj.getAll = function(){
    return $http.get("/contacts.json").success(function(data){
      angular.copy(data, contact_obj.contact_datas);
    });
  }

  contact_obj.create = function(value){
    return $http.post("/contacts.json", value).success(function(data){
      console.log(data);
      if(data.status != 404){      
        contact_obj.contact_datas.unshift(data);        
      }
    });
  }

  contact_obj.destroy = function(id){
    return $http.delete("/contacts/" + id + ".json").success(function(data){      
      var new_arr = contact_obj.contact_datas.filter(function(val){
        return val["id"] !== id;
      });
      angular.copy(new_arr, contact_obj.contact_datas);
    });
  }

  return contact_obj;
}]);
