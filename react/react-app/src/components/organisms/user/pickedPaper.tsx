import { VFC, memo, useEffect, useState } from "react";
import { Box, Flex, Heading, Link, LinkBox, Text } from "@chakra-ui/react";
import { FaRegBookmark } from "react-icons/fa";
import Avatar, { genConfig } from "react-nice-avatar"
import { useSelector } from "react-redux";
import axios from "axios";

import { Selector } from "../../../redux/users/ActionType";
import { getUserName } from "../../../redux/users/selectors";
import auth from "../../../firebase";
import { avatarConfig } from "../../../template/niceAvatar";
import { SendPickData } from "../../../redux/search/ActionType";
import { API_ENDPOINT } from "../../../template/apiEndpoint";

export const PickedPaper: VFC = memo(() => {
  const [getNumber, setGetNumber] = useState(0)
  const [pickedData, setPickedData] = useState<any>([])
  const selector = useSelector((state: Selector) => state);
  const userName = getUserName(selector);
  const currentUserId = auth.currentUser?.uid;

  // ユーザー名の長さによってアバターを決定
  useEffect(() => {
    const number = userName?.length ? userName.length % 6 : 0
    setGetNumber(number)
  }, [userName])

  const config = genConfig({...avatarConfig[getNumber]});

  useEffect(() => {
    axios.post(`${API_ENDPOINT}/picks/users`, {uid: currentUserId})
    .then((res) => {
      setPickedData(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  let result = [{"rank":1,"title":"[書籍][B] ブロックチェーン革命","abstract":"本書は、 「超整理法」 「超文章法」などで有名な一橋大学名誉教授 野口 悠紀雄氏の著作である。 \n「ブロックチェーン技術」を、著者の言葉を借りてひと言で説明する と以下のようになる。 \n“私は、『仮想通貨革命』の「はじめに」で、「これは反乱ではありませぬ …","writer":"野口悠紀雄， 牧野貴樹 -  - ipa.go.jp","year":"2017","publisher":"なし","citations":" 12","url":"https://www.ipa.go.jp/files/000062713.pdf","pick":2,"coefficient":5}]
  result = [...result, ...result, ...result, ...result, ...result, ...result, ...result, ...result, ...result]

  return (
    <Flex w="80%" align="center">
      <Box w="30%" position="fixed">
        <Avatar
          {...config}
          style={{width: "12rem", height: "12rem"}}
          shape="rounded"
        />
        <Heading as="h1" fontSize="lg" mt="2">{userName}</Heading>
        <Text color="gray.500">ID：{currentUserId}</Text>
      </Box>
      <Box ml="30%" my="12">
        <Heading as="h1" fontSize="2xl">Pickした論文一覧</Heading>
        {pickedData.length ? (
          <Box mt="8" w="100%">
            {pickedData.map((res: SendPickData, i: number) => (
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
                <Text fontSize="xs" color="#406B15">
                  {res.writer}・{res.year}・{res.publisher}
                </Text>
                <Text fontSize="xs" mt={1}>
                  <Flex align="center">
                    <Text>引用数: {res.citations}</Text>
                    <Link
                      href="//twitter.com/share"
                      className="twitter-share-button"
                      data-text={res.title}
                      data-hashtags="PaperPicks"
                      data-url={res.url}
                      data-lang="ja"
                      mx={3}
                    >ツイート</Link>
                  </Flex>
                </Text>
              </Box>
            ))}
          </Box>
        ) : (
          <Box mt="8" w="100%">
            <Text fontWeight="bold">Pickした論文がありません</Text>
          </Box>
        )}
      </Box>
    </Flex>
  )
})