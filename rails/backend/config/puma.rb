# サーバ起動は rails s
# 自動で、puma.rbを読み込みpuma.sockにバインドする。

# デフォルトの設定
max_threads_count = ENV.fetch("RAILS_MAX_THREADS") { 5 }
min_threads_count = ENV.fetch("RAILS_MIN_THREADS") { max_threads_count }
threads min_threads_count, max_threads_count
# bind        ENV.fetch("IP") { "0.0.0.0" }
# port        ENV.fetch("PORT") { 80 }
environment ENV.fetch("RAILS_ENV") { "development" }
pidfile ENV.fetch("PIDFILE") { "tmp/pids/server.pid" }
plugin :tmp_restart

# ソケット通信用に追加
bind "unix://#{Rails.root}/tmp/sockets/puma.sock"