import logging


class LoggingFilter:
    """
        特定のログレベルのみ残すフィルター
    """
    def __init__(self, level):
        self.__level = level

    def filter(self, logRecord):
        return logRecord.levelno <= self.__level


def set_handler(loglevel, filename):
    #共通のログフォーマット
    log_format = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(module)s - %(message)s', datefmt='%Y-%m-%d %H:%M:%S')

    # ハンドラー作成
    handler = logging.FileHandler(filename)
    handler.setLevel(loglevel)
    handler.setFormatter(log_format)
    handler.addFilter(LoggingFilter(loglevel))

    # ハンドラーを追加
    logger.addHandler(handler)


# ロガーの作成
logger = logging.getLogger(__name__)
# 最低限のログレベルを設定
logger.setLevel(logging.DEBUG)
# 各ロガーレベル専用のオブジェクトを作成
# set_handler(logging.INFO, './logs/paper_info.log')
# set_handler(logging.ERROR, './logs/paper_error.log')
# set_handler(logging.DEBUG, './logs/paper_debug.log')

# rails アプリ用
set_handler(logging.INFO, 'app/python-script/logs/paper_info.log')
set_handler(logging.ERROR, 'app/python-script/logs/paper_error.log')
set_handler(logging.DEBUG, 'app/python-script/logs/paper_debug.log')