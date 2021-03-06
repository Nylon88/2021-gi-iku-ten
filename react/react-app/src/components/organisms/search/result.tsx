import { Box, Flex, Link, LinkBox, Text } from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { searchResult, SendPickData } from "../../../redux/search/ActionType";
import { Selector as UserSelector } from "../../../redux/users/ActionType";

import auth from "../../../firebase";
import { useMessage } from "../../../hooks/useMessage";
import { pickPaper } from "../../../redux/search/Operations";
import { getUserState } from "../../../redux/users/selectors";
import { API_ENDPOINT } from "../../../template/apiEndpoint";

type Props = {
  resultData: searchResult[]
}

export const Result: VFC<Props> = memo((props) => {
  const { resultData } = props;
  const currentUser = auth.currentUser
  const uid = currentUser?.uid

  const userSelector = useSelector((state: UserSelector) => state)
  const userStatus = getUserState(userSelector)

  const { showMessage } = useMessage();
  const dispatch = useDispatch();

  // resultDataが更新されたらPoint計算をし、ソートする
  useCallback(() => {
    resultData.map((data) => (
      data.point = data.citations * 100 + data.pick * data.coefficient
    ))
    resultData.sort((a,b) => {
      if (a.point > b.point) return -1
      if (a.point < b.point) return 1
      return 0
    })
    console.table(resultData)
  }, [resultData])

  const handleClickPickCount = async (result: SendPickData, i: number) => {
    const {title, abstract, writer, year, publisher, citations, url} = result
    await axios.post(`${API_ENDPOINT}/picks`, {
      title,
      abstract,
      writer,
      year,
      publisher,
      citations,
      url,
      uid
    })
    .then((res) => {
      const props = {
        result: res.data,
        index: i,
        resultData,
        showMessage
      }
      dispatch((pickPaper(props)))
    })
    .catch(() => {
      showMessage({title: "Pickできませんでした。", status: "error"})
    })
  }

  const pickFunction = (result: SendPickData, i: number) => {
    userStatus ?
      handleClickPickCount(result, i) :
      showMessage({title: "ログインユーザーのみこの機能を使えます", status: "error"})
  }

  return (
    <Box w="65%" maxW="700px" mb="16">
      {resultData.map((res, i) => (
        <Box key={i} px="5" py="3" style={(i % 2 === 0) ? {backgroundColor: "#FAFAFA"} : {background: "#EAEAEA"}}>
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
          <Text fontSize="xs" mt="1">
            <Flex align="center">
              <LinkBox>
                <Flex align="center">
                  <FaRegBookmark />
                  <Text
                    onClick={() => pickFunction(res, i)}
                    _hover={{textDecoration: "underline", cursor: "pointer"}}>
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
        </Box>
      ))}
    </Box>
  )
})
