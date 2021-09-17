import { memo, VFC } from "react";
import {
  Box,
  Flex,
  Link,
  LinkBox,
  Text,
} from "@chakra-ui/react";
import { FaRegBookmark } from "react-icons/fa";

import { favoriteData } from "../../../redux/search/ActionType";

type Props = {
  data: favoriteData
  i: number
  pickData: Number[]
}

export const ResultData: VFC<Props> = memo((props) => {
  const { data, i, pickData } = props;

  return (
    <Box key={i} px="5" py="3" style={(i % 2 === 0) ? {backgroundColor: "#FAFAFA"} : {background: "#EAEAEA"}}>
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
  )
})