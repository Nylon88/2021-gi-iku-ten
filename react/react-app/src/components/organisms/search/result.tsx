import { Box, Flex, Link, LinkBox, Skeleton, SkeletonText, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { Selector as SearchSelector } from "../../../redux/search/ActionType";
import { Selector as SkeletonSelector } from "../../../redux/boolean/ActionType";
import { Selector as UserSelector } from "../../../redux/users/ActionType";

import { searchResultSelector } from "../../../redux/search/selectors";
import { getSkeleton } from "../../../redux/boolean/selectors";
import auth from "../../../firebase";
import { useMessage } from "../../../hooks/useMessage";
import { pickPaper } from "../../../redux/search/Operations";
import { getUserState } from "../../../redux/users/selectors";

export const Result: VFC = memo(() => {
  const searchSelector = useSelector((state: SearchSelector) => state);
  const resultData = searchResultSelector(searchSelector);
  const currentUser = auth.currentUser
  const uid = currentUser?.uid

  const skeletonSelector = useSelector((state: SkeletonSelector) => state.boolean.boolean);
  const skeleton = getSkeleton(skeletonSelector);

  const userSelector = useSelector((state: UserSelector) => state)
  const userStatus = getUserState(userSelector)

  const { showMessage } = useMessage();
  const dispatch = useDispatch();

  const handleClickPickCount = async (url: string, i: number) => {
    await axios.post("http://localhost:8000/v1/picks", {url, uid})
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

  const pickFunction = (url: string, i: number) => {
    userStatus ?
      handleClickPickCount(url, i) :
      showMessage({title: "ログインユーザーのみこの機能を使えます", status: "error"})
  }

  return (
    <Box w="65%" maxW="700px">
      {resultData.map((res, i) => (
        <Box key={i} px="5" py="3" style={(i % 2 === 0) ? undefined : {backgroundColor: "#FAFAFA"}}>
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
            <Text fontSize="sm" mt="1" mw="100%">
              {res.abstract}
            </Text>
          </SkeletonText>
          <Skeleton isLoaded={skeleton} height="14px">
            <Flex align="center" mt="1">
              <Text fontSize="xs" color="#406B15">
                {res.writer}・{res.year}・{res.publisher}
              </Text>
              <Text fontSize="xs" mx={3}>
                <Flex align="center">
                  <LinkBox>
                    <Flex align="center">
                      <FaRegBookmark />
                      <Text
                        ml={0.5}
                        onClick={() => pickFunction(res.url, i)}
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
            </Flex>
          </Skeleton>
        </Box>
      ))}
    </Box>
  )
})
