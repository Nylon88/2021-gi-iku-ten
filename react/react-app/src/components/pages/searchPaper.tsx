import { Box, Center, Divider, Flex, Link, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { FaRegBookmark } from "react-icons/fa";

import { SearchCondition } from "../molecules/searchCondition";
import { SearchInput } from "../molecules/searchInput";

export const searchPaper: VFC = memo(() => {
  const thisYear = new Date().getFullYear()

  return (
    <Center mt={16}>
      <Box>
        <SearchInput />
        <Flex mt={8}>
          <Box w="20%" mr={16}>
            <SearchCondition title="期間" maxW={20} defaultV={thisYear - 10} min={1900} max={thisYear}/>
            <SearchCondition title="引用数" maxW={14} defaultV={0} min={0} />
            <SearchCondition title="Pick数" maxW={14} defaultV={0} min={0} />
          </Box>
          <Box w="80%">
            {[...Array(10)].map((i) => (
              <Box key={i}>
                <Link
                  fontSize="lg"
                  fontWeight="bold"
                  color="#0055AA"
                  href="https://www.jstage.jst.go.jp/article/niraopinion/26/0/26_26/_article/-char/ja/"
                  isExternal
                >
                  ブロックチェーンは社会をどう変えるか
                </Link>
                <Text fontSize="sm" mt="2">
                  抄録 ブロックチェーンは 「帳簿 (台帳) のイノベーション」 といわれる. この技術を使うことで,<br />
                  モノやカネの取引記録を確実に保管し, 信頼のおける取引を効率的かつ迅速に,<br />
                  国境を越えて実現することが可能となる. また, 政府もデータベースにある国民の個人情報を …
                </Text>
                <Flex align="center">
                  <Text fontSize="xs" mt={1} color="#406B15">
                    論文太郎, 論文花子, 他3人・2015年・NIRAオピニオンペーパー
                  </Text>
                  <Text fontSize="xs" mt={1} mx={3}>
                    <Flex align="center">
                      <LinkBox>
                        <Flex align="center">
                          <FaRegBookmark />
                          <LinkOverlay href="#" ml={0.5} _hover={{textDecoration: "underline"}}>Pick数: 10</LinkOverlay>
                        </Flex>
                      </LinkBox>
                      <Text mx={2}>引用数: 10</Text>
                      <Link
                        href="//twitter.com/share"
                        className="twitter-share-button"
                        data-text="ブロックチェーンは社会をどう変えるか"
                        data-hashtags="PaperPicks"
                        data-url="https://www.jstage.jst.go.jp/article/niraopinion/26/0/26_26/_article/-char/ja/"
                        data-lang="ja"
                      >ツイート</Link>
                    </Flex>
                  </Text>
                </Flex>
                <Divider my="4"/>
              </Box>
            ))}
          </Box>
        </Flex>
      </Box>
    </Center>
  )
})