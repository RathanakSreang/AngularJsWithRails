describe('Service Contact', function(){  
  var scope, contact;
  beforeEach(module("AngularDemo"));
  beforeEach(inject(function(Contact, $rootScope){
    contact = Contact;
    scope = $rootScope.$new();
  }));

  beforeEach(function(){
    contact.contact_datas.push({id: 1, name: "Kuku 1", description: "description 1",
                                email:"sssss1ss@yoyo.com"});
    contact.contact_datas.push({id: 2, name: "Kuku 2", description: "description 2",
                                email:"sssss1ss@yoyo.com"});
    contact.contact_datas.push({id: 3, name: "Kuku 3", description: "description 3",
                                email:"sssss1ss@yoyo.com"});
  });
  describe('get all methods', function(){
    var httpBackend;
    beforeEach(inject(function($httpBackend){
      httpBackend = $httpBackend;
       $httpBackend.whenGET("/contacts.json").respond(200,[
        {
          name: "Name 1",
          description: "rrrrrrr",
          email: "sssss1sssss@yoyo.com"
        },
        {
          name: "Name 2",
          description: "kakakak",
          email: "sssssdddddds@yoyo.com"
        },
        {
          name: "Name 3",
          description: "lalala",
          email: "bababa@yoyo.com"
        }
        ]);
    }));
    it('should get all data form server', function(){
      contact.getAll();
      scope.$digest();
      httpBackend.flush();
      expect(contact.contact_datas.length).toBe(3);
    });
  });

  describe('function create', function(){
    it('should save and add one more colomn', inject(function($httpBackend){
      $httpBackend.whenPOST("/contacts.json").respond(200,
        {
          name: "Sok ka",
          description: "The 4 description",
          email: "saaaa@yoyo.com"
        }
      );
      contact.create({name: "Sok ka", description: "The 4 description",
                      email: "saaaa@yoyo.com"});
      scope.$digest();
      $httpBackend.flush();
      expect(contact.contact_datas.length).toBe(4);
    }));
    it('should not be able to save and or add any data', inject(function($httpBackend){
      $httpBackend.whenPOST("/contacts.json").respond(404,
        {
          "error": "Something wrong"
        }
      );
      contact.create({"description": "Before Create"});
      scope.$digest();
      $httpBackend.flush();
      expect(contact.contact_datas.length).toBe(3);
    }));
  });

  describe('function delete', function(){
    it('should delete one row if successful delete', inject(function($httpBackend){
      $httpBackend.whenDELETE("/contacts/1.json").respond(200,
        {
          "success": "Delete success"
        }
      );      
      contact.destroy(1);
      scope.$digest();
      $httpBackend.flush();
      expect(contact.contact_datas.length).toBe(2);
    }));
    it('should delete one row if successful delete', inject(function($httpBackend){
      $httpBackend.whenDELETE("/contacts/1.json").respond(404,
        {
          "error": "Delete fail"
        }
      );      
      contact.destroy(1);
      scope.$digest();
      $httpBackend.flush();
      expect(contact.contact_datas.length).toBe(3);
    }));
  });
});
