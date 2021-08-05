# Rubyをインストール
FROM ruby:2.6.5

# aptリポジトリの更新とアップグレード
RUN apt update && apt -y upgrade

# 環境変数を設定
ENV APP_HOME /backend

# ディレクトリの作成と移動
WORKDIR $APP_HOME

# ホストのGemfileなどをコンテナへコピー
COPY ./backend/Gemfile $APP_HOME/Gemfile
COPY ./backend/Gemfile.lock $APP_HOME/Gemfile.lock

# BundlerでGemをインストール
RUN bundle install

# 設定ファイル書き換え（既存のアプリをマウントする場合は不要）
# COPY config $APP_HOME/config

# pip3のインストール
RUN apt install python3-pip -y

# # pythonのスクレイピング用のパッケージをインストールする
COPY ./backend/requirements.txt $APP_HOME/requirements.txt
RUN pip3 install -r requirements.txt

# socketファイルのパーミッションを変更
CMD ["chmod", "777", "/backend/tmp/sockets/puma.sock"]
# コンテナが停止しない様にbashを対話モードで起動
CMD sh -c "/bin/bash"