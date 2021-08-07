from bs4 import BeautifulSoup
import requests
import pandas as pd
import re


def get_search_results_df(keyword: str,number:int):
    """
    Description：
        キーワードと欲しい論文本数を引数に論文の情報をPandasで返す。
        CSV ファイルformat　「"rank", "title", "writer", "year", "citations", "url"」
    
    Argments:
        keyword : 論文タイトル
        number  : 取得したい論文数
    
    Return:
        各論文の情報を持ったPandas

    """

    columns = ["rank", "title", "abstract", "writer", "year", "citations", "url"]
    df = pd.DataFrame(columns=columns) #表の作成
    html_doc = requests.get("https://scholar.google.co.jp/scholar?hl=ja&as_sdt=0%2C5&num=" + str(number) + "&q=" + keyword).text
    soup = BeautifulSoup(html_doc, "html.parser") # BeautifulSoupの初期化
    tags1 = soup.find_all("h3", {"class": "gs_rt"})  # title&url
    tags2 = soup.find_all("div", {"class": "gs_a"})  # writer&year
    tags3 = soup.find_all(text=re.compile("引用元"))  # citation
    tags4 = soup.find_all("div", {"class": "gs_rs"})   # 簡単なアブストラクト
    tags5 = soup.find_all("div", {"class": "gs_or_ggsm"})   # 発行元

    print(f'tags5{tags5[0]}')

    rank = 1
    for tag1, tag2, tag3, tag4 in zip(tags1, tags2, tags3, tags4):
        title = tag1.text.replace("[HTML]","")
        url = tag1.select("a")[0].get("href")
        writer = tag2.text
        writer = re.sub(r'\d', '', writer)
        year = tag2.text
        year = re.sub(r'\D', '', year)
        citations = tag3.replace("引用元","")
        abstract = tag4.text
        se = pd.Series([rank, title, abstract, writer, year, citations, url], columns)
        df = df.append(se, columns)
        rank += 1
    return df


if __name__ == "__main__":
    # 本番では、railsから引数を受け取り実行する。
    keyword = "machine learning"
    number = 3
    search_results_df = get_search_results_df(keyword,number)

    # # CSVファイルで出力する。
    # filename = "Google_Scholar.csv"
    # search_results_df.to_csv(filename, encoding="utf-8")
