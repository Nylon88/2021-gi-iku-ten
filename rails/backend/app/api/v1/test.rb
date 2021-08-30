require 'json'
def test_rb

  num = 100
  # pythonファイルの実行
  # 最大20件までしかでてこない
  return_value = `python3 /backend/app/python-script/paper.py\
                    -k Learnig -n 1 -y 2021 -l English`
  # hashにパース
  parse_value = JSON.parse(return_value)
  puts parse_value

  # 論文のランキングを行う
  # puts parse_value[0]["citations"]
  # Pick数の検索
  # parse_value.each do |value|
  #   paper = Paper.find_by(url: value["url"])
  #   pick = paper.present? ? Pick.where(paper_id: paper.id).count : 0
  #   value[:pick] = pick

end

test_rb
