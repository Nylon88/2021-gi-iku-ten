module V1
  class Search < Grape::API
    require 'json'

    resources :search do
      desc '検索ワードをもらって検索結果を返す'
      params do
        requires :word, type: String
        requires :period, type: String
      end
      post '/' do
        num = 10
        # pythonファイルの実行
        return_value = `python3 #{Rails.root}/app/python-script/paper.py\
                          -k #{params[:word]} -n #{num} -y #{params[:period]}`
        # パース
        parse_value = JSON.parse(return_value)
        # # Pick数の検索
        # parse_value.each do |value|
        #   paper = Paper.find_by(url: value["url"])
        #   pick = paper.present? ? Pick.where(paper_id: paper.id).count : 0
        #   value[:pick] = pick
        # end

        # フロント側に返却
        present parse_value
      end
    end
  end
end
