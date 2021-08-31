class FunctionTools
	def jud_language sentence

		# 文中の空白を削除する
		original_str = sentence.encode("UTF-8").gsub(/\s+/, "")

		# # 元の文章の長さを計測
		len_original = original_str.length
		# # 抽出した文字の長さを計測 * 100
		len_match = original_str.scan(/\w/).length + 1

		# 判定
		if (len_match * 100) / len_original > 70
			return "English"
		else
			return "Japanese"
		end
	end
end
