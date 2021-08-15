import { Box, Center, Divider, Flex, Link, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { useSelector } from "react-redux";

import { Selector } from "../../redux/search/ActionType";
import { searchResultSelector } from "../../redux/search/selectors";
import { SearchCondition } from "../molecules/searchCondition";
import { SearchInput } from "../molecules/searchInput";

export const searchPaper: VFC = memo(() => {
  const thisYear = new Date().getFullYear()
  const selector = useSelector((state: Selector) => state);
  const resultData = searchResultSelector(selector);

  return (
    <Center mt={16}>
      <Box w="60%" maxW="880px">
        <SearchInput />
        <Flex mt={8}>
          <Box w="20%" mr={16}>
            <SearchCondition title="期間" maxW={20} defaultV={thisYear - 10} min={1900} max={thisYear}/>
            <SearchCondition title="引用数" maxW={14} defaultV={0} min={0} />
            <SearchCondition title="Pick数" maxW={14} defaultV={0} min={0} />
          </Box>
          <Box w="80%">
            {resultData.map((res, i) => (
              <Box key={i}>
                <Link
                  fontSize="lg"
                  fontWeight="bold"
                  color="#0055AA"
                  href={res.url}
                  isExternal
                >
                  {res.title}
                </Link>
                <Text fontSize="sm" mt="2" mw="100%">
                  {res.abstract}
                </Text>
                <Flex align="center">
                  <Text fontSize="xs" mt={1} color="#406B15">
                    {res.writer}
                  </Text>
                  <Text fontSize="xs" mt={1} mx={3}>
                    <Flex align="center">
                      <LinkBox>
                        <Flex align="center">
                          <FaRegBookmark />
                          <LinkOverlay href="#" ml={0.5} _hover={{textDecoration: "underline"}}>Pick数: 10</LinkOverlay>
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
                <Divider my="4"/>
              </Box>
            ))}
          </Box>
        </Flex>
      </Box>
    </Center>
  )
})