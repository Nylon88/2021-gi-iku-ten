# MySQLをインストール
FROM mysql:5.6.51

# 「Authentication plugin 'caching_sha2_password' cannot be loaded:」とエラーが発生するため
# Mysqlの認証方式を「caching_sha2_password」から「mysql_native_password」に変更
COPY backend.cnf /etc/mysql/conf.d/backend.cnf