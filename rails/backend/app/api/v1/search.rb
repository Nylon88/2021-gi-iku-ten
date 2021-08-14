module V1
  class Search < Grape::API
    require 'json'

    resources :search do
      desc '検索ワードをもらって検索結果を返す'
      params do
        requires :word, type: String
      end
      post '/' do
        num = 10
        # pythonファイルの実行
        return_value = `python3 #{Rails.root}/app/python-script/paper.py -k #{params[:word]} -n #{num}`
        # パース
        parse_value = JSON.parse(return_value)
        # フロント側に返却
        present parse_value
      end
    end
  end
end
