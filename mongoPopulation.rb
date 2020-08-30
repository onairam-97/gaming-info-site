require 'mongo'
require 'json'

client = Mongo::Client.new("mongodb://root:root@mongodb:27017/mydb?authSource=admin")

collection = client[:videogames]

file_json = File.read("videogames_mongo.json")
videogames_json = JSON.parse(file_json)

videogames_json.each do |videogame|
    result = collection.insert_one(videogame)
    result.n
end

puts collection.count()

