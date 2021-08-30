require 'json'
def test_rb

  num = 3
  # pythonファイルの実行
  # 最大20件までしかでてこない
  return_value = `python3 /backend/app/python-script/paper.py\
                    -k Learnig -n 3 -y 2021 -l English`
  # hashにパース
  parse_value = JSON.parse(return_value)
  # puts parse_value

  # 係
  coefficient = 5
  parse_value.each do |paper_info|
    # Pick数を検索
    pick = 2
    # paper = Paper.find_by(url: paper_info["url"])
    # pick = paper.present? ? Pick.where(paper_id: paper.id).count : 0

    # paper_info[:coefficient] = 5
    # paper_info[:pick] = pick
    paper_info["coefficient"] = 5
    paper_info["pick"] = pick

  end
  

  # 論文のランキングを行う
  # puts parse_value

  puts parse_value.to_json
  # Pick数の検索
  #   paper = Paper.find_by(url: value["url"])
  #   pick = paper.present? ? Pick.where(paper_id: paper.id).count : 0
  #   value[:pick] = pick

end

test_rb
