import logging
from bs4 import BeautifulSoup
import requests
import pandas as pd

import re
import argparse
from argparse import ArgumentError
from itertools import zip_longest

from utils.log_file_by_level import logger


def get_search_results_df(keyword: str,number:int):
    """
    Description：
        キーワードと欲しい論文本数を引数に論文の情報をjsonで返す。
    
    Argments:
        keyword : 論文タイトル
        number  : 取得したい論文数
    
    Return:
        jsonでデータを返す。
        データは一つの論文情報毎に以下の順で返す。
        ["rank", "title", "abstract", "writer", "year", "publisher", "citations", "url"]
        　
        (返却formatの例):
             {"rank":1,"title":"[PDF][PDF] Machine learning",
             "abstract":"This exciting addition to the McGraw-Hill Series in Computer Science focuses on the concepts and techniques that contribute to the rapidly changing field of machine learning--including probability and statistics, artificial intelligence, and neural networks--unifying them\u00a0\u2026",
             "writer":"TM Mitchell -  - akum.pw","year":"1997","publisher":"akum.pw","citations":" 538","url":"https:\/\/akum.pw\/mkk00nyuy5.pdf"}


    """
    try:
        columns = ["rank", "title", "abstract", "writer", "year", "publisher", "citations", "url"]
        df = pd.DataFrame(columns=columns) #表の作成
        response = requests.get("https://scholar.google.co.jp/scholar?hl=ja&as_sdt=0%2C5&num=" + str(number) + "&q=" + keyword)
        
        # status codeをログファイルに出力
        response_statu_code = response.status_code
        logger.debug(f'in function:<get_search_results_df> / Status Code:{response_statu_code}')
        
        html_doc = response.text
        soup = BeautifulSoup(html_doc, "html.parser") # BeautifulSoupの初期化
        tags1 = soup.find_all("h3", {"class": "gs_rt"})  # title&url
        tags2 = soup.find_all("div", {"class": "gs_a"})  # writer&year
        tags3 = soup.find_all(text=re.compile("引用元"))  # citation
        tags4 = soup.find_all("div", {"class": "gs_rs"})   # 簡単なアブストラクト
        tags5 = soup.find_all("div", {"class": "gs_or_ggsm"})   # 発行元

        rank = 1
        # for tag1, tag2, tag3, tag4, tags5 in zip(tags1, tags2, tags3, tags4, tags5):
        for tag1, tag2, tag3, tag4, tag5 in zip_longest(tags1, tags2, tags3, tags4, tags5, fillvalue='なし'):
            # タイトル
            title = tag1.text.replace("[HTML]","")
            # URL
            url = tag1.select("a")[0].get("href")
            # 著者
            writer = tag2.text
            writer = re.sub(r'\d', '', writer)
            # 発行された年
            year = tag2.text
            year = re.sub(r'\D', '', year)            
            # 引用された数
            citations = tag3.replace("引用元","")            
            # 概要の抽出            
            if tag4 is None:
                abstract = "なし"
            else:
                abstract = tag4.text
            # 発行元
            if tag5 is None:
                publisher = "なし"
            elif isinstance(tag5, str):
                publisher = tag5.replace("[PDF]","").replace(" ","")
            else:
                publisher = tag5.text.replace("[PDF]","").replace(" ","")

            # 列を構成
            se = pd.Series([rank, title, abstract, writer, year, publisher, citations, url], columns)
            df = df.append(se, columns)
            rank += 1
        
        jsoned_df = df2json(df)
    except Exception as e:
        logger.error(f'in function:<get_search_results_df> : {e}')

    return jsoned_df


def df2json(df_data):
    json_data = df_data.to_json(orient='records')
    return  json_data


# 実行ファイル指定後の引数を取得する。
def extra_argments():
    try:
        parser = argparse.ArgumentParser()

        parser.add_argument('-k', '--keyword')
        parser.add_argument('-n', '--number')
        args = parser.parse_args()

        if (not args.keyword) or (not args.number):
            raise ArgumentError(None, '要素がありません')
        
        logger.info(f'in function:<extra_argments> keyword:{args.keyword} | number:{args.number}')
    
    except Exception as e:
        logger.error(f'in function:<extra_argments> : {e}')

    return args.keyword, args.number


if __name__ == "__main__":
    # ファイル引数を受け取る
    keyword, number = extra_argments()

    # google schalorでスクレイピングを実行 -> jsonで返す
    search_results_jsoned_df = get_search_results_df(keyword,number)

    print(search_results_jsoned_df)
