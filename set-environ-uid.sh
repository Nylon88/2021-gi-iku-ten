# 始めてコンテナを立てるcompose upするときは、まずこのファイルを実行して環境変数にUID,GIDを定義する。
# コマンド → ./set-environ-uid.sh
#!/bin/sh
echo "LINUX_MYSQL_UID=$(id -u $USER)" >> .db.env
echo "LINUX_MYSQL_GID=$(id -g $USER)" >> .db.env