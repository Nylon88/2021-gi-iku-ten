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
          paper_info["citations"] = paper_info["citations"] == "なし" ? 0 : paper_info["citations"].to_i
          Citation.create(count: paper_info["citations"].to_i)
        end

        # フロント側に返却
        present parse_value
      end


      desc '検索前に表示'
      get '/' do
        # 最近Pickされた論文10件
        recent_pick = Paper.last(10)

        # 人気の論文10件
        paper_id = Pick.pluck(:paper_id)
        sort_favorite = paper_id.group_by { |e| e }.sort_by { |e, v| -v.size }.map(&:first)
        favorite_paper = []
        favorite_paper_picks = []
        sort_favorite[0, 10].each do |favorite|
          paper = Paper.find(favorite)
          favorite_paper << paper
          favorite_paper_picks << paper.picks.count
        end

        return_value = [] << {
          recent: recent_pick,
          favorite: favorite_paper,
          favorite_picks: favorite_paper_picks
        }

        present return_value
      end
    end
  end
end
