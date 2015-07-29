class Contact < ActiveRecord::Base
  validates :description, presence: true
  validates :name, presence: true, length: {minimum: 5, maximum: 50}
  # EMAIL = /\A([^@\s\-_\.\d]+[\-\._]?[^@\s\-_\.]+)@\w+\.\w{2,4}\Z/i
  EMAIL = /\A[a-zA-Z][a-zA-Z\d]*[_.-]?[a-zA-Z\d]+@[a-zA-Z]+\.[a-zA-Z]{2,3}\Z/i
  validates :email, presence: true, length: {minimum: 10, maximum: 80}, format: EMAIL
end
