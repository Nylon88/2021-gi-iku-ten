# PaperPicks


## リポジトリについて
このリポジトリじゃ2021の技育展に出展するPaperPicksの作品です。

## PaperPicksとは
PaperPicksは論文を読みたくても中々手が出せない人の為に作られたサービスです。
例えば、
- 良い論文を読みたいけど英語表記で調査する必要があり
面倒に感じる
- 論文の管理が面倒くさい
- よりシンプルに使いたい

こんな人に**おすすめ**です。  

## サイトにアクセスする
*** 
- [PaperPicksへのリンク](https://paperpicks.jp)
***
※状況によってサーバを落としている可能性がございます。
　ご了承ください。
<br>

## 使い方
直観的に扱う事の出来る事に注力して作成致しました。
使い方を示す***Map***はありません。
実際にアクセスして感じてみて下さい。

<br>

## 再現方法
今回、Docker・Docker-composeで組んでおりますのでローカルでも簡単に再現する事が可能となっております。
リポジトリをclone後Docker-compose build, Docker-compose up -dでコンテナを簡単に作成・起動できます。
***以下を参照***下さいませ。
```
[Step 1]　リポジトリのクローン
git clone https://github.com/Nylon88/2021-gi-iku-ten.git

[Step 2]　ディレクトリに移動
cd <your directory of docker-compose.dev.yml>

[Step 3]　コンテナのimageを作成
docker-compose -f docker-compose.dev.yml build

[Step 4]　コンテナの作成と起動
docker-compose -f docker-compose.dev.yml up -d

# ここからはBackendコンテナでの操作
[Step 5]  Backendコンテナに接続
docker exec -it 2021-gi-iku-ten_backend bash

[Step 7]  BackendコンテナでrailsのDB作成・マイグレート
rails db:create
rails db:migrate

[Step 8]  Backendコンテナでrailsサーバを起動
rails s

```

