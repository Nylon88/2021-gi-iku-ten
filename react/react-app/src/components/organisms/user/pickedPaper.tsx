import { VFC, memo, useEffect, useState } from "react";
import { Box, Flex, Heading, Link, LinkBox, Text } from "@chakra-ui/react";
import { FaRegBookmark } from "react-icons/fa";
import Avatar, { genConfig } from "react-nice-avatar"
import { useSelector } from "react-redux";
import axios from "axios";

import { Selector } from "../../../redux/users/ActionType";
import { getAvatar, getUserName } from "../../../redux/users/selectors";
import auth from "../../../firebase";
import { SendPickData } from "../../../redux/search/ActionType";
import { API_ENDPOINT } from "../../../template/apiEndpoint";

export const PickedPaper: VFC = memo(() => {
  const [pickedData, setPickedData] = useState<any>([])
  const selector = useSelector((state: Selector) => state);
  const userName = getUserName(selector);
  const avatar = getAvatar(selector)
  const currentUserId = auth.currentUser?.uid;

  useEffect(() => {
    axios.post(`${API_ENDPOINT}/picks/users`, {uid: currentUserId})
    .then((res) => {
      setPickedData(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <Flex w="80%" align="center">
      <Box w="30%" position="fixed">
        <Avatar
          {...avatar}
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