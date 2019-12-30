# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.new(name: "Drew", email: "d@gmail.com")
user2 = User.new(name: "Alex", email: "a@gmail.com")

event1 = Event.new(day: 31, month: 12, name: "New Years Eve Party", description: "At Alex's", priority: 1, user_id: user1.id)
event2 = Event.new(day: 31, month: 12, name: "Host New Years Eve Party", description: "At my house", priority: 1, user_id: user2.id)

