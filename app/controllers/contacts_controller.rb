class ContactsController < ApplicationController
  
  def index
    render json: Contact.all
  end

  def create
    @contact = Contact.new contact_params
    if @contact.save
      render json: @contact
    else 
      render json: {status: 404, message: @contact.errors.full_messages}
    end
  end

  def destroy
    @contact = Contact.find params[:id]
    @contact.destroy
    render json: @contact
  end

  private
  def contact_params
    params.require(:contact).permit :id, :name, :email, :description
  end
end
