from bs4 import BeautifulSoup
import requests
import json
import random

import os
from os.path import join, dirname
from dotenv import load_dotenv


# url = "https://expressvpn.com/what-is-my-ip"
url = "https://scholar.google.co.jp/scholar?hl=ja&as_sdt=0%2C5&num=1&q=learning&as_ylo=2021&as_vis=1"


def my_ip_access():
    res = requests.get(url)
    res.encoding = 'utf8'
    # html = BeautifulSoup(res.content, 'html.parser')
    html = BeautifulSoup(res.text, 'html.parser')
    for element in html.find_all('h4', class_='ip-address'):
        print(element.get_text())


def proxie_access():
    proxies = {
	"http": "https://601f4e5dc5:YV3EwPeK@104.144.15.162:4444",
	"https": "https://601f4e5dc5:YV3EwPeK@104.144.15.162:4444"
    }

    res = requests.get(url, proxies=proxies)
    res.encoding = 'utf8'
    # html = BeautifulSoup(res.content, 'html.parser')
    html = BeautifulSoup(res.text, 'html.parser')
    print(html)
    # for element in html.find_all('h4', class_='ip-address'):
    #     print(element.get_text())

def random_proxie_access():
    # 環境変数からプロキシサーバをロードする
    dotenv_path = join(dirname(__file__), '.api.env')
    load_dotenv(verbose=True, dotenv_path=dotenv_path)
    proxies = []
    proxies.append(os.getenv("PROXIE_1"))
    proxies.append(os.getenv("PROXIE_2"))
    proxies.append(os.getenv("PROXIE_3"))
    proxies.append(os.getenv("PROXIE_4"))
    proxies.append(os.getenv("PROXIE_5"))

    # ランダムに一つ選択
    proxy =random.choice(proxies)
    print(proxy)

    proxies = {
	"http": proxy,
	"https": proxy
    }

    res = requests.get(url, proxies=proxies)
    res.encoding = 'utf8'
    # html = BeautifulSoup(res.content, 'html.parser')
    html = BeautifulSoup(res.text, 'html.parser')
    for element in html.find_all('h4', class_='ip-address'):
        print(element.get_text())


# 環境変数からプロキシサーバをロードする
dotenv_path = join(dirname(__file__), '.proxies.env')
load_dotenv(verbose=True, dotenv_path=dotenv_path)
proxies = []
proxies.append(os.getenv("PROXIE_1"))
proxies.append(os.getenv("PROXIE_3"))
proxies.append(os.getenv("PROXIE_4"))
proxies.append(os.getenv("PROXIE_5"))

# ランダムに一つ選択
# proxy =random.choice(proxies)
# print(proxy)

# my_ip_access()
proxie_access()
# random_proxie_access()