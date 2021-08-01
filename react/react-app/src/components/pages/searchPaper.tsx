import { Box, Center, Divider, Flex, Link, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

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
                <Text fontSize="xs" mt={1} color="#406B15">
                  論文太郎, 論文花子, 他3人・2015年・NIRAオピニオンペーパー
                </Text>
                <Divider my="4"/>
              </Box>
            ))}
          </Box>
        </Flex>
      </Box>
    </Center>
  )
})