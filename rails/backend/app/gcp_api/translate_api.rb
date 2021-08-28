require 'net/http'
require 'uri'
require 'json'
require 'dotenv'

def translate q

	# api keyの取得
	Dotenv.load
	api_key = ENV["APIKEY"]

  url = URI.parse('https://www.googleapis.com/language/translate/v2')
  params = {
    q: q,
    target: "ja",
    source: "en",
    key: api_key
  }
  url.query = URI.encode_www_form(params)
  res = Net::HTTP.get_response(url)
  JSON.parse(res.body)["data"]["translations"].first["translatedText"]
end


# 実行
puts translate "I'm trying to use the google translation api."