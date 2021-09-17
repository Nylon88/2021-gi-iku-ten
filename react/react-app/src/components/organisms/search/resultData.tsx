import { memo, VFC } from "react";
import {
  Box,
  Flex,
  Link,
  LinkBox,
  Text,
} from "@chakra-ui/react";
import { FaRegBookmark } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { favoriteData } from "./favoriteData";
import { useMessage } from "../../../hooks/useMessage";
import { SendPickData } from "../../../redux/search/ActionType";
import { getUserState } from "../../../redux/users/selectors";
import { API_ENDPOINT } from "../../../template/apiEndpoint";
import { searchFavoritePapers } from "../../../redux/search/Operations";
import { Selector } from "../../../redux/users/ActionType";

type Props = {
  data: favoriteData
  i: number
  pickData: Number[]
}

export const ResultData: VFC<Props> = memo((props) => {
  const { data, i, pickData } = props;
  const selector = useSelector((state: Selector) => state)
  const userStatus = getUserState(selector)
  const { showMessage } = useMessage();
  const dispatch = useDispatch();

  const handleClickPickCount = (result: favoriteData, i: number) => {
    const {title, abstract, writer, year, publisher, citations, url} = result
    axios.post<SendPickData[]>(`${API_ENDPOINT}/picks`, {
      title,
      abstract,
      writer,
      year,
      publisher,
      citations,
      url
    })
    .then((res) => {
    })
    .catch(() => {
      showMessage({title: "Pickできませんでした。", status: "error"})
    })
  }

  const pickFunction = (result: favoriteData, i: number) => {
    userStatus ?
      handleClickPickCount(result, i) :
      showMessage({title: "ログインユーザーのみこの機能を使えます", status: "error"})
  }

  return (
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
              <Text
                onClick={() => pickFunction(data, i)}
                _hover={{textDecoration: "underline", cursor: "pointer"}}
              >
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