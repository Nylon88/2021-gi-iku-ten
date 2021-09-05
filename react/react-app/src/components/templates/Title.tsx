import { memo, useEffect, useState, VFC } from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "react-router";

export const Title: VFC = memo(() => {
  const [titleName, setTitleName] = useState("")
  const location = useLocation();
  const path = location.pathname

  // pathが変わる度にtitleNameを更新
  useEffect(() => {
    switch (path) {
      case "/":
        setTitleName("")
        break
      case "/sign_up":
        setTitleName("新規登録")
        break
      case "/sign_in":
        setTitleName("ログイン")
        break
      case path.startsWith("/users/") && path:
        setTitleName("プロフィール")
        break
      default:
        setTitleName("お探しのページは存在しません")
    }
  }, [path])

  const title = titleName ? `${titleName} | PaperPicks` : "PaperPicks"

  return (
    <Helmet title={title} />
  )
})