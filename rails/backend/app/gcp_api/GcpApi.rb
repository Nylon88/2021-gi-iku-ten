require 'net/http'
require 'uri'
require 'json'
require 'dotenv'


class GcpApi
  @@api_key = nil

  # api keyのload
  def load_api_key
    Dotenv.load
    @@api_key = ENV["APIKEY"]
  end

  def translate q

    GcpApi.new.load_api_key
    key = ENV["APIKEY"]
    url = URI.parse('https://www.googleapis.com/language/translate/v2')
    params = {
      q: q,
      target: "ja",
      source: "en",
      key: @@api_key
    }
    url.query = URI.encode_www_form(params)
    res = Net::HTTP.get_response(url)
    result = JSON.parse(res.body)["data"]["translations"].first["translatedText"]

    return result
  end
end


# 実行
puts GcpApi.new.translate "I'm trying to use the google translation api."