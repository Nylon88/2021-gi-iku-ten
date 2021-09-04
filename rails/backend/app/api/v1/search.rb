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


        # 論文評価係数を取得
        coefficient = Paperevaluation.last
        coefficient = coefficient.present? ? coefficient.factor : 0

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
          paper_info["abstract"] = GcpApi.new.translate abstract if language == "English"

          # 引用数を引用数テーブルに保存する。
          Citation.create(count: paper_info["citations"].to_i)
        end

        # フロント側に返却
        present parse_value
      end
    end
  end
end
