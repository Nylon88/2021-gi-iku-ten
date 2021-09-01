import { Box, Flex, Heading, Link, LinkBox, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

import auth from "../../firebase";
import { Selector } from "../../redux/users/ActionType";
import { getUserName, getUserState } from "../../redux/users/selectors";


export const UserShow: VFC = memo(() => {
  const selector = useSelector((state: Selector) => state);
  const userStatus = getUserState(selector);
  const userName = getUserName(selector);
  const currentUserId = auth.currentUser?.uid;
  const location = useLocation();

  // useEffect(() => {
  //   axios.post("http://localhost:8000/v1/picks", {uid: currentUserId})
  //   .then((res) => {
  //     console.log(res)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }, [])

  let result = [{"rank":1,"title":"[書籍][B] ブロックチェーン革命","abstract":"本書は、 「超整理法」 「超文章法」などで有名な一橋大学名誉教授 野口 悠紀雄氏の著作である。 \n「ブロックチェーン技術」を、著者の言葉を借りてひと言で説明する と以下のようになる。 \n“私は、『仮想通貨革命』の「はじめに」で、「これは反乱ではありませぬ …","writer":"野口悠紀雄， 牧野貴樹 -  - ipa.go.jp","year":"2017","publisher":"なし","citations":" 12","url":"https://www.ipa.go.jp/files/000062713.pdf","pick":2,"coefficient":5}]
  result = [...result, ...result, ...result, ...result, ...result, ...result, ...result, ...result, ...result]

  return (
    <Flex w="80%" align="center" justify="center">
      {userStatus && location.pathname === `/users/${currentUserId}` && (
        <Flex w="80%" align="center">
          <Box w="30%">
            <Heading as="h1" fontSize="lg">{userName}</Heading>
            <Text color="gray.500">ID：{currentUserId}</Text>
          </Box>
          <Box w="70%" my="12">
            <Heading as="h1" fontSize="2xl">Pickした論文一覧</Heading>
            <Box mt="8" w="100%">
              {result.map((res, i) => (
                <Box key={i} px="5" py="3" style={(i % 2 === 0) ? undefined : {backgroundColor: "#FAFAFA"}}>
                  <Link
                    fontSize="lg"
                    fontWeight="bold"
                    color="#0055AA"
                    href={res.url}
                    isExternal
                  >
                    {res.title}
                  </Link>
                  <Text fontSize="sm" mt="1" mw="100%">
                    {res.abstract}
                  </Text>
                  <Flex align="center" mt="1">
                    <Text fontSize="xs" color="#406B15">
                      {res.writer}・{res.year}・{res.publisher}
                    </Text>
                    <Text fontSize="xs" mx={3}>
                      <Flex align="center">
                        <LinkBox>
                          <Flex align="center">
                            <FaRegBookmark />
                            <Text
                              ml={0.5}
                            >
                              Pick数: {res.pick}
                            </Text>
                          </Flex>
                        </LinkBox>
                        <Text mx={2}>引用数: {res.citations}</Text>
                        <Link
                          href="//twitter.com/share"
                          className="twitter-share-button"
                          data-text={res.title}
                          data-hashtags="PaperPicks"
                          data-url={res.url}
                          data-lang="ja"
                        >ツイート</Link>
                      </Flex>
                    </Text>
                  </Flex>
              </Box>
              ))}
            </Box>
          </Box>
        </Flex>
      )}
      {userStatus && location.pathname !== `/users/${currentUserId}` && (
        <Text fontWeight="bold">自身のプロフィールページしか閲覧できません</Text>
      )}
      {userStatus || (
        <Text fontWeight="bold">ログインしてください</Text>
      ) }
    </Flex>
  )
})