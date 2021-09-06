import logging
from bs4 import BeautifulSoup
import requests
import pandas as pd
from dotenv import load_dotenv
import random

import re
import argparse
from argparse import ArgumentError
from itertools import zip_longest
import os
from os.path import join, dirname
import smtplib, ssl
from email.mime.text import MIMEText

from utils.log_file_by_level import logger


# リクエスト処理
def run_request(url, proxies):
    response = requests.get(url, proxies=proxies)

    # status codeをログファイルに出力
    response_statu_code = response.status_code
    logger.debug(f'in function:<get_search_results_df> / Status Code:{response_statu_code}')
    return response


# 使うプロキシサーバをセット
def set_proxy(proxy_list):
    # プロキシサーバをランダムに一つ選択
    proxy =random.choice(proxy_list)

    proxies = {
    "http": proxy,
    "https": proxy
    }
    return proxies, proxy


# 開発者にメールを送る
def send_email(username, password, to_address, proxy_ip, status_code):

    smtp_host = 'smtp.gmail.com'
    smtp_port = 587
    from_address = username

    subject = 'Detect Proxiy Server!!'
    body = f'proxy ip:{proxy_ip} \nstatus_code:{status_code}'

    smtpobj = smtplib.SMTP(smtp_host, smtp_port)
    smtpobj.starttls()
    smtpobj.login(username, password)
    msg = MIMEText(body)
    msg['Subject'] = subject
    msg['From'] = from_address
    msg['To'] = to_address
    smtpobj.send_message(msg)
    smtpobj.close()


def run_scraping(keyword:str, number:int, year:str=None):
    """
    Description：
        キーワードと欲しい論文本数を引数に論文の情報をjsonで返す。

    Argments:
        keyword : 論文タイトル
        number  : 取得したい論文数
        year    : 絞り込みたい発行年　※　もし絞り込みたい年が無ければnullを引数に入れてください。

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
        # print(f'language:{language}')
        columns = ["rank", "title", "abstract", "writer", "year", "publisher", "citations", "url"]
        df = pd.DataFrame(columns=columns) #表の作成


        # 判定式を使って、リクエストを投げる。
        # yearを指定する: (ex)as_ylo=2021　を使う
        # 引用情報を含んだ論文かどうか判定する：　as_vis=1含む
        # url = "https://yamitzky.hatenablog.com/entry/2016/05/13/204107"
        # url = "https://httpbin.org/status/403"
        url = f"https://scholar.google.co.jp/scholar?hl=ja&as_sdt=0%2C5&num={str(number)}&q={keyword}&as_ylo={year}&as_vis=1"

        # 環境変数からプロキシサーバをロードする
        dotenv_path = join(dirname(__file__), '.proxies.env')
        load_dotenv(verbose=True, dotenv_path=dotenv_path)
        proxy_list = []
        proxy_list.append(os.getenv("PROXIE_1"))
        proxy_list.append(os.getenv("PROXIE_2"))
        proxy_list.append(os.getenv("PROXIE_3"))
        proxy_list.append(os.getenv("PROXIE_4"))
        proxy_list.append(os.getenv("PROXIE_5"))

        proxies, proxy = set_proxy(proxy_list=proxy_list)

        """
            ➀status codeが200番じゃない限りリクエストをする
            ➁又、その時使用した「ip」「status code」「レスポンスデータ」を開発者のメールに送信する
            ➂その時使用した「ip」はプロキシサーバリストから外す
            ⓸ 論文の情報を含んだページを返しているか判定
        """
        while True:
            # ➀
            response = run_request(url=url, proxies=proxies)
            status_code = response.status_code
            if status_code == 200:
                # ⓸
                html_doc = response.text
                soup = BeautifulSoup(html_doc, "html.parser") # soupの初期化
                class_paper = soup.find(class_="gs_r gs_or gs_scl")
                # print(f'class_paper:{class_paper}')
                if class_paper != None:
                    break

            # 環境変数から開発者のメールアドレスをロードする
            dotenv_path = join(dirname(__file__), '.developer.env')
            load_dotenv(verbose=True, dotenv_path=dotenv_path)
            # DEVELOPEREMAILADRESS = os.getenv("DEVELOPEREMAILADRESS")
            USERNAME = os.getenv("USERNAME")
            PASSWORD = os.getenv("PASSWORD")
            TOADDRESS = os.getenv("TOADDRESS")
            # ➁　※出来ればスレッド処理したい
            send_email(username=USERNAME, password=PASSWORD, to_address=TOADDRESS, proxy_ip=proxy, status_code=status_code)

            # ➂
            proxy_list.remove(proxy)
            proxies, proxy = set_proxy(proxy_list=proxy_list)

        """
            # スクレピング本体
        """
        # 論文ごと要素を取得する
        papers_list = soup.find_all(class_="gs_r gs_or gs_scl")
        rank = 1
        for paper_object in papers_list:

            # 各論文の情報を大まかに抽出する
            tag1 = paper_object.find("h3", {"class": "gs_rt"})  # title&url
            tag2 = paper_object.find("div", {"class": "gs_a"})  # writer&year
            tag3 = paper_object.find(text=re.compile("引用元"))  # citation
            tag4 = paper_object.find("div", {"class": "gs_rs"})   # 簡単なアブストラクト
            tag5 = paper_object.find("div", {"class": "gs_or_ggsm"})   # 発行元

            # タイトル
            if isinstance(tag1, str):
                title = tag1.replace("[HTML]","")
            else:
                title = tag1.text.replace("[HTML]","")
            # URL
            url = tag1.select("a")[0].get("href")

            # 著者
            if isinstance(tag2, str):
                writer = re.sub(r'\d', '', tag2)
            else:
                writer = tag2.text
                writer = re.sub(r'\d', '', writer)
            # 発行された年
            if isinstance(tag2, str):
                year = re.sub(r'\D', '', tag2)
            else:
                year = tag2.text
                year = re.sub(r'\D', '', year)

            # 引用された数
            citations = tag3.replace("引用元","")

            # 概要の抽出
            if tag4 is None:
                abstract = "なし"
            elif isinstance(tag4, str):
                abstract = tag4
            else:
                abstract = tag4.text

            # 発行元
            if tag5 is None:
                publisher = "なし"
            elif isinstance(tag5, str):
                publisher = tag5.replace("[PDF]","").replace(" ","")
            else:
                publisher = tag5.text.replace("[PDF]","").replace(" ","")

            print(f'publisher:{publisher}')

            # 列を構成
            se = pd.Series([rank, title, abstract, writer, year, publisher, citations, url], columns)
            df = df.append(se, columns)
            rank += 1

        jsoned_data = df2json(df)                
    except Exception as e:
        logger.error(f'in function:<get_search_results_df> : {e}')

    return jsoned_data


def df2json(df_data):
    json_data = df_data.to_json(orient='records')
    return  json_data


# 実行ファイル指定後の引数を取得する。
def extra_argments():
    parser = argparse.ArgumentParser()

    parser.add_argument('-k', '--keyword')
    parser.add_argument('-n', '--number')
    parser.add_argument('-y', '--year')
    args = parser.parse_args()

    if (not args.keyword) or (not args.number) or (not args.year):
        logger.error(f'in function:<extra_argments> : 要素がありません')
        raise ArgumentError(None, '要素がありません')

    logger.info(f'in function:<extra_argments> keyword:{args.keyword} | number:{args.number} | year:{args.year}')

    return args.keyword, args.number, args.year


if __name__ == "__main__":
    # ファイル引数を受け取る
    keyword, number, year = extra_argments()

    # google schalorでスクレイピングを実行 -> jsonで返す
    jsoned_data = run_scraping(keyword, number, year)

    print(jsoned_data)