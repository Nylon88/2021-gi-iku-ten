require 'json'

class TestWorkSpace
  def test_rb

    num = 3
    # pythonファイルの実行
    # 最大20件までしかでてこない
    return_value = `python3 /backend/app/python-script/paper.py\
                      -k Learnig -n 3 -y 2021`
    # hashにパース
    parse_value = JSON.parse(return_value)
    # puts parse_value

    # 係数
    coefficient = 5
    parse_value.each do |paper_info|
      # Pick数を検索
      pick = 2
      # paper = Paper.find_by(url: paper_info["url"])
      # pick = paper.present? ? Pick.where(paper_id: paper.id).count : 0

      paper_info["coefficient"] = 5
      paper_info["pick"] = pick

      # 翻訳判定
      abstract = paper_info["abstract"]
      # 言語判定
      language = FunctionTools.new.jud_language abstract
      # もし英語なら翻訳する
      if language == "English"
        paper_info["abstract"] = GcpApi.new.translate abstract
      end
    end

    # 論文のランキングを行う
    # puts parse_value
    return parse_value.to_json
  end

end

# やる事
# ➀　URLを元にPick数を取り出す処理　-> ok
# ⓶　論文評価ポイントを算出する処理
# ⓷　論文評価ポイントを保存するテーブルの作成
# ⓸　定期的に論文評価ポイントを算出し保存する処理
# ⓹uby側で言語判断を行う
# 　とりあえず、「検索文字に含まれる英数字の割合で英語にするか日本語にするかの判定」
