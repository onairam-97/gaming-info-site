require_relative './rubyQuery.rb'
require 'sinatra'

pid = Process.pid
puts "This is process #{Process.pid}"

query = Query.new

# CORS policy
before do
  content_type :json
  headers 'Access-Control-Allow-Origin' => '*',
           'Access-Control-Allow-Methods' => ['OPTIONS', 'GET', 'POST']
end

get '/hello-world' do
  "Hello World!"
end

get '/exit' do
  Process.kill 'TERM', pid
end

# Query per la ricerca dei videogiochi
get '/videogames_search/:videogame_name' do |videogame_name|
  query.search_videogames(videogame_name)
end

# Query per la ricerca dei videogiochi per piattaforma
get '/platform/:platform' do |platform|
  query.search_videogames_by_platform(platform)
end

# Query per la ricerca dei videogiochi per genere
get '/genre/:genre' do |genre|
  query.search_videogames_by_genre(genre)
end

# Query per la ricerca dei videogiochi tramite il coefficiente di jaccard
get '/videogames_search_jaccard/:game' do |game|
    query.search_videogames_by_jaccard_coefficient(game)
end

get '/get_videogames_list' do
    query.get_videogames_list_sort_by_years()
end


