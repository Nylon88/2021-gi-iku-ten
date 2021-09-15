import {
  Box,
  Flex,
  Link,
  LinkBox,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Tabs,
  Text,

} from "@chakra-ui/react";
import axios from "axios";
import { memo, useEffect, useState, VFC } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { API_ENDPOINT } from "../../../template/apiEndpoint";

export type favoriteData = {
  id: number
  url: string
  created_at: string
  updated_at: string
  title: string
  abstract: string
  writer: string
  year: string
  publisher: string
  citations: string
}

export const DefaultView: VFC = memo(() => {
  const [favoriteData, setFavoriteData] = useState<favoriteData[]>([]);
  const [pickData, setPickData] = useState<Number[]>([]);
  const [recentData, setRecentData] = useState<favoriteData[]>([]);

  useEffect(() => {
    axios.get(`${API_ENDPOINT}/search`)
    .then((res) => {
      setFavoriteData(res.data[0].favorite);
      setPickData(res.data[0].favorite_picks);
      setRecentData(res.data[0].recent);
    })
    .catch((err) => console.log(err) )
  },[])
  console.log(favoriteData)

  return (
    <Box w="65%" maxW="700px" mb="16">
      <Tabs variant="enclosed" px="5" py="3">
        <TabList>
          <Tab>人気の論文</Tab>
          <Tab>最近Pickされた論文</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {favoriteData.map((data, i) => (
              <Box key={i} px="2" py="3" style={(i % 2 === 0) ? undefined : {backgroundColor: "#FAFAFA"}}>
                <Link
                  fontSize="lg"
                  fontWeight="bold"
                  color="#0055AA"
                  href={data.url}
                  isExternal
                >
                  {data.title}
                </Link>
                <Text fontSize="sm" mt="1" mw="100%">
                  {data.abstract}
                </Text>
                <Text fontSize="xs" color="#406B15">
                  {data.writer}・{data.year}・{data.publisher}
                </Text>
                <Text fontSize="xs" mt="1">
                  <Flex align="center">
                    <LinkBox>
                      <Flex align="center">
                        <FaRegBookmark />
                        <Text>
                          Pick数: {pickData[i]}
                        </Text>
                      </Flex>
                    </LinkBox>
                    <Text mx={2}>引用数: {data.citations}</Text>
                    <Link
                      href="//twitter.com/share"
                      className="twitter-share-button"
                      data-text={data.title}
                      data-hashtags="PaperPicks"
                      data-url={data.url}
                      data-lang="ja"
                    >ツイート</Link>
                  </Flex>
                </Text>
              </Box>
            ))}
          </TabPanel>
          <TabPanel>
            test2
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
})