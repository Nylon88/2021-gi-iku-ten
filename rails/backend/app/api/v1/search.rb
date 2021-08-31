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
                          -k #{params[:word]} -n #{num} -y #{params[:period]} -l Japanese`
        # パース
        parse_value = JSON.parse(return_value)


        # 係数
        coefficient = 5
        parse_value.each do |paper_info|
          # Pick数を検索
          paper = Paper.find_by(url: paper_info["url"])
          pick = paper.present? ? Pick.where(paper_id: paper.id).count : 0
          paper_info["pick"] = pick

          # 係数処理無視
          paper_info["coefficient"] = coefficient

          # 翻訳判定
          abstract = paper_info["abstract"]
          # 言語判定
          language = FunctionTools.new.jud_language abstract
          # もし英語なら翻訳する
          if language == "English"
            paper_info["abstract"] = GcpApi.new.translate abstract
          end
        end

        # フロント側に返却
        present parse_value
      end
    end
  end
end
