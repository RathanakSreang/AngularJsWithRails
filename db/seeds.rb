# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
10.times do |n|
  Contact.create name: "Name #{n}", email: "sss_#{n}sss@kuku.ca",
                  description: "Lorem ipsum dolor sit amet, 
                              consectetur adipisicing elit. Corrupti reiciendis
                              aspernatur veniam officiis adipisci voluptatem 
                              eius odio error, nihil quam quisquam illo in modi
                              id alias, expedita aliquam iusto omnis."
end
