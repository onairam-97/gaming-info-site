require 'mongo'
require 'json'

client = Mongo::Client.new("mongodb://root:root@mongodb:27017/mydb?authSource=admin")

collection = client[:videogames]

collection.delete_many({ })

puts collection.count()
