require "rails_helper"

RSpec.describe Contact, type: :model do
  before :each do
    @contact = Contact.new name: "Gallery Name 1",
                           email: "test@yoyo.com",
                           description: "Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Sed necessitatibus 
                                        mollitia rerum rem inventore voluptatem
                                        esse suscipit, quas vel dolorem autem, 
                                        eaque ullam enim, minus ratione commodi 
                                        hic, ex modi."
  end

  it "name should be valid" do
    expect(@contact).to be_valid
  end

  context "Name" do
    it "should invalid when it is not present" do
      @contact.name = ""
      expect(@contact).not_to be_valid
    end

    it "should invalid when it is short than 5 character" do
      @contact.name = "AAAA"
      expect(@contact).not_to be_valid
    end

    it "should invalid when it is long than 80 character" do
      @contact.name = "AAAAAAAAAA" * 9
      expect(@contact).not_to be_valid
    end
  end

  context "Email" do
    it "should invalid when it is not present" do
      @contact.email = ""
      expect(@contact).not_to be_valid
    end

    it "should invalid when it is incorrect format" do
      @contact.email = "DDDDDDDDDD@dddddd"
      expect(@contact).not_to be_valid

      @contact.email = "DDDDDDDDDD@dddddd"
      expect(@contact).not_to be_valid

      @contact.email = "DDD..DDDDDDD@dddddd.com"
      expect(@contact).not_to be_valid

      @contact.email = "DDDDDDDDDD@dddddd.commmm"
      expect(@contact).not_to be_valid
    end

    it "should invalid when it is short than 10 character" do
      @contact.email = "A" * 9
      expect(@contact).not_to be_valid
    end

    it "should invalid when it is long than 80 character" do
      @contact.email = "AAAAAAAAAA" * 9
      expect(@contact).not_to be_valid
    end
  end

  context "Description" do
    it "should invalid when it is not present" do
      @contact.description = ""
      expect(@contact).not_to be_valid
    end
  end
end
