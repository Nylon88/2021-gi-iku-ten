# Rubyをインストール
FROM ruby:2.6.5

# aptリポジトリの更新とアップグレード
RUN apt update
RUN apt -y upgrade

# Node.jsをインストール
RUN curl -sL RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
    apt install nodejs

# Yarnをインストール
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt update && apt install yarn

# 環境変数を設定
ENV APP_HOME /backend

# ディレクトリの作成と移動
WORKDIR $APP_HOME

# ホストのGemfileなどをコンテナへコピー
COPY Gemfile $APP_HOME/Gemfile
COPY Gemfile.lock $APP_HOME/Gemfile.lock

# BundlerでGemをインストール
RUN bundle install

# Railsアプリをapi版で作成（既存のアプリをマウントする場合は不要）
RUN rails new . --api -d mysql --skip-bundle || bundle update

# 設定ファイル書き換え（既存のアプリをマウントする場合は不要）
COPY config $APP_HOME/config

# マウントできるように公開
VOLUME $APP_HOME

# pip3のインストール
RUN apt install python3-pip -y

# pythonのスクレイピング用のパッケージをインストールする
COPY requirements.txt $APP_HOME/requirements.txt
RUN pip3 install -r requirements.txt

# socketファイルのパーミッションを変更
CMD ["chmod", "777", "/backend/tmp/sockets/puma.sock"]
# コンテナが停止しない様にbashを対話モードで起動
CMD sh -c "/bin/bash"