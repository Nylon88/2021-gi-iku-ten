import { Box, Divider, Flex, Link, LinkBox, LinkOverlay, Skeleton, SkeletonText, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { useSelector } from "react-redux";

import { Selector as SearchSelector } from "../../../redux/search/ActionType";
import { Selector as SkeletonSelector } from "../../../redux/boolean/ActionType";

import { searchResultSelector } from "../../../redux/search/selectors";
import { getSkeleton } from "../../../redux/boolean/selectors";

export const Result: VFC = memo(() => {
  const searchSelector = useSelector((state: SearchSelector) => state);
  const resultData = searchResultSelector(searchSelector);

  const skeletonSelector = useSelector((state: SkeletonSelector) => state.boolean.boolean);
  const skeleton = getSkeleton(skeletonSelector);

  return (
    <Box w="80%">
      {resultData.map((res, i) => (
        <Box key={i}>
          <Skeleton isLoaded={skeleton}>
            <Link
              fontSize="lg"
              fontWeight="bold"
              color="#0055AA"
              href={res.url}
              isExternal
            >
              {res.title}
            </Link>
          </Skeleton>
          <SkeletonText isLoaded={skeleton}>
            <Text fontSize="sm" mt="2" mw="100%">
              {res.abstract}
            </Text>
          </SkeletonText>
          <Skeleton isLoaded={skeleton} height="14px">
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
          </Skeleton>
          <Divider my="4"/>
        </Box>
      ))}
    </Box>
  )
})