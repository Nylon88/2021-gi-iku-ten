import json
import requests
import os
from os.path import join, dirname
import argparse
from argparse import ArgumentError


from dotenv import load_dotenv


def translate(q:str) -> str:
    # 環境変数を参照しロードする
    dotenv_path = join(dirname(__file__), '.api.env')
    load_dotenv(verbose=True, dotenv_path=dotenv_path)
    APIKEY = os.getenv("APIKEY")

    # 翻訳する向き
    source = "en"
    target = "ja"

    # リクエストを投げるrest api用のurl
    url = "https://www.googleapis.com/language/translate/v2"

    request = url + "?" + "key=" + APIKEY + "&" + "target=" + target + "&" + "source=" + source + "&" + "q=" + q;
    response = requests.get(request)
    text = json.loads(response.text)["data"]["translations"][0]["translatedText"]

    return text


# 実行ファイル指定後の引数を取得する。
def extra_argments():
    parser = argparse.ArgumentParser()

    parser.add_argument('-q', '--queue')
    args = parser.parse_args()

    if (not args.queue):
        raise ArgumentError(None, '要素がありません')

    return args.queue



if __name__ == "__main__":
    # fileに渡す引数を取得する
    q = extra_argments()

    # 引数を翻訳する
    text = translate(q)
    # 翻訳語のtextを標準出力で返す
    print(text)