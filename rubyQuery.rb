require 'mongo'
require 'json'
require 'set'

class Query
    def initialize()
        @client = Mongo::Client.new("mongodb://root:root@mongodb:27017/mydb?authSource=admin")
    end

    def search_videogames(videogame_name)
        
        videogames_collection = @client[:videogames]
        
        @client['videogames'].indexes.create_one({Name: "text"},{name: "TextIndex"})
        
        videogames_list_JSON= []

        while (videogames_list_JSON.empty?)
            videogames_collection.find(
                { "$text" => { "$search" => videogame_name.split(" ").map{|str| "\""+str+"\""}.join(' ').downcase} },
                projection: {
                    "score" => { "$meta" => "textScore" },
                    Name: 1,
                    Platform: 1,
                    Year_of_Release: 1,
                    Genre: 1,
                    Developer: 1,
                    Rating: 1,
                    Image: 1,
                    Guide: 1,
                    Trailer: 1,
                    Gameplay: 1
                }).each do |document|
                    videogames_list_JSON.push(document)
            end

            # Se la query non ha ottenuto risultati, cancello l'ultima parola della stringa e ricomincio con una nuova query
            if (videogames_list_JSON.empty?)
                string_array = videogame_name.split(" ")

                # Se sono rimasto con un'ultima parola, esci
                if(string_array.size == 0)
                break
                end

                string_array.pop()
                videogame_name = string_array.join(" ")
            end
        end
            
        #Creo il json risultante
        list_JSON = JSON.generate(videogames_list_JSON.sort_by{|document| document['score']}.reverse!)
        return list_JSON
    end
    
    def search_videogames_by_platform(platform)

        videogames_collection = @client[:videogames]
        
        videogames_list_JSON= []

        videogames_collection.find(
            { Platform: platform },
            projection: {
             Name: 1,
             Platform: 1,
             Year_of_Release: 1,
             Genre: 1,
             Developer: 1,
             Rating: 1,
             Image: 1,
             Guide: 1,
             Trailer: 1,
             Gameplay: 1
            }).limit(50).each do |document|
                videogames_list_JSON.push(document)
        end


        #Creo il json risultante
        list_JSON = JSON.generate(videogames_list_JSON.sort_by{|document| document['score']}.reverse!)
        return list_JSON
    end
    
    def search_videogames_by_genre(genre)

        videogames_collection = @client[:videogames]
        
        videogames_list_JSON= []

        videogames_collection.find(
            { Genre: genre },
            projection: {
             Name: 1,
             Platform: 1,
             Year_of_Release: 1,
             Genre: 1,
             Developer: 1,
             Rating: 1,
             Image: 1,
             Guide: 1,
             Trailer: 1,
             Gameplay: 1
            }).limit(50).each do |document|
                videogames_list_JSON.push(document)
        end


        #Creo il json risultante
        list_JSON = JSON.generate(videogames_list_JSON.sort_by{|document| document['score']}.reverse!)
        return list_JSON
    end
    
    def search_videogames_by_jaccard_coefficient(game)
        
        videogames_collection = @client[:videogames]
        
        videogames_list_JSON= []
    
        videogames_collection.find().each do |videogame|
            
        
        array1 = game.split('+')
        array2 = videogame['Name'].split(" ")

        intersection = array1 & array2
        union        = array1 + array2

        # Set does not implement #uniq or #uniq! since elements are
        # always guaranteed to be present only once. That's the only
        # reason we need to guard against that here.
        union.uniq! if union.respond_to?(:uniq!)

        score = intersection.length.to_f / union.length.to_f
        
        videogame['jaccardScore'] = score
        
        if (score > 0.0)
        videogames_list_JSON.push(videogame)
        end
        
        end
        
        #Creo il json risultante
        list_JSON = JSON.generate(videogames_list_JSON.sort_by{|videogame| videogame['jaccardScore']}.reverse!)
        
        return list_JSON
        
    end
    
    def get_videogames_list_sort_by_years()
        
        videogames_collection = @client[:videogames]
        
        videogames_list_JSON= []
        
        videogames_list_JSON_sorted= []
        
        videogames_list_JSON_sorted_sub= []
        
        videogames_collection.find().each do |document|
            if (document['Year_of_Release'] != nil)
            videogames_list_JSON.push(document)
            end
        end
        
        videogames_list_JSON_sorted = videogames_list_JSON.sort_by{|document| document['Year_of_Release']}.reverse!
        
        videogames_list_JSON_sorted[0..19].each do |game|
            videogames_list_JSON_sorted_sub.push(game)
            end
        
        #Creo il json risultante
        list_JSON = JSON.generate(videogames_list_JSON_sorted_sub)
        return list_JSON
        
    end

end
