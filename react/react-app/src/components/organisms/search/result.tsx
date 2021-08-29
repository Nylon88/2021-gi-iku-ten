import { Box, Flex, Link, LinkBox, Skeleton, SkeletonText, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { useSelector } from "react-redux";

import { Selector as SearchSelector } from "../../../redux/search/ActionType";
import { Selector as SkeletonSelector } from "../../../redux/boolean/ActionType";

import { searchResultSelector } from "../../../redux/search/selectors";
import { getSkeleton } from "../../../redux/boolean/selectors";
import axios from "axios";
import auth from "../../../firebase";
import { useMessage } from "../../../hooks/useMessage";
import { useState } from "react";

export const Result: VFC = memo(() => {
  const [count, setCount] = useState(0)
  const searchSelector = useSelector((state: SearchSelector) => state);
  const resultData = searchResultSelector(searchSelector);
  const currentUser = auth.currentUser
  const uid = currentUser?.uid

  const skeletonSelector = useSelector((state: SkeletonSelector) => state.boolean.boolean);
  const skeleton = getSkeleton(skeletonSelector);

  const { showMessage } = useMessage();

  const handleClickPickCount = async (url: string) => {
    await axios.post("http://localhost:8000/v1/picks", {url, uid})
    .then((res) => {
      setCount(res.data[0])
      const title = res.data[1]
      const status = title == "正常にPickできました" ? "success" : "error"
      showMessage({title, status})
    })
    .catch(() => {
      showMessage({title: "Pickできませんでした。", status: "error"})
    })
  }

  let testData = [{
    rank: 1,
    title: "[書籍][B] ブロックチェーン革命",
    abstract: "本書は、 「超整理法」 「超文章法」などで有名な一橋大学名誉教授 野口 悠紀雄氏の著作である。 \n「ブロックチェーン技術」を、著者の言葉を借りてひと言で説明する と以下のようになる。 \n“私は、『仮想通貨革命』の「はじめに」で、「これは反乱ではありませぬ …",
    writer: "野口悠紀雄， 牧野貴樹 -  - ipa.go.jp",
    year: "2017",
    publisher: "jst.go.jp",
    citations:" 12",
    url: "https://www.ipa.go.jp/files/000062713.pdf"
  },{
    rank: 1,
    title: "[書籍][B] ブロックチェーン革命",
    abstract: "本書は、 「超整理法」 「超文章法」などで有名な一橋大学名誉教授 野口 悠紀雄氏の著作である。 \n「ブロックチェーン技術」を、著者の言葉を借りてひと言で説明する と以下のようになる。 \n“私は、『仮想通貨革命』の「はじめに」で、「これは反乱ではありませぬ …",
    writer: "野口悠紀雄， 牧野貴樹 -  - ipa.go.jp",
    year: "2017",
    publisher: "jst.go.jp",
    citations:" 12",
    url: "https://www.ipa.go.jp/files/000062713.pdf"
  },{
    rank: 1,
    title: "[書籍][B] ブロックチェーン革命",
    abstract: "本書は、 「超整理法」 「超文章法」などで有名な一橋大学名誉教授 野口 悠紀雄氏の著作である。 \n「ブロックチェーン技術」を、著者の言葉を借りてひと言で説明する と以下のようになる。 \n“私は、『仮想通貨革命』の「はじめに」で、「これは反乱ではありませぬ …",
    writer: "野口悠紀雄， 牧野貴樹 -  - ipa.go.jp",
    year: "2017",
    publisher: "jst.go.jp",
    citations:" 12",
    url: "https://www.ipa.go.jp/files/000062713.pdf"
  },{
    rank: 1,
    title: "[書籍][B] ブロックチェーン革命",
    abstract: "本書は、 「超整理法」 「超文章法」などで有名な一橋大学名誉教授 野口 悠紀雄氏の著作である。 \n「ブロックチェーン技術」を、著者の言葉を借りてひと言で説明する と以下のようになる。 \n“私は、『仮想通貨革命』の「はじめに」で、「これは反乱ではありませぬ …",
    writer: "野口悠紀雄， 牧野貴樹 -  - ipa.go.jp",
    year: "2017",
    publisher: "jst.go.jp",
    citations:" 12",
    url: "https://www.ipa.go.jp/files/000062713.pdf"
  },{
    rank: 1,
    title: "[書籍][B] ブロックチェーン革命",
    abstract: "本書は、 「超整理法」 「超文章法」などで有名な一橋大学名誉教授 野口 悠紀雄氏の著作である。 \n「ブロックチェーン技術」を、著者の言葉を借りてひと言で説明する と以下のようになる。 \n“私は、『仮想通貨革命』の「はじめに」で、「これは反乱ではありませぬ …",
    writer: "野口悠紀雄， 牧野貴樹 -  - ipa.go.jp",
    year: "2017",
    publisher: "jst.go.jp",
    citations:" 12",
    url: "https://www.ipa.go.jp/files/000062713.pdf"
  },{
    rank: 1,
    title: "[書籍][B] ブロックチェーン革命",
    abstract: "本書は、 「超整理法」 「超文章法」などで有名な一橋大学名誉教授 野口 悠紀雄氏の著作である。 \n「ブロックチェーン技術」を、著者の言葉を借りてひと言で説明する と以下のようになる。 \n“私は、『仮想通貨革命』の「はじめに」で、「これは反乱ではありませぬ …",
    writer: "野口悠紀雄， 牧野貴樹 -  - ipa.go.jp",
    year: "2017",
    publisher: "jst.go.jp",
    citations:" 12",
    url: "https://www.ipa.go.jp/files/000062713.pdf"
  },{
    rank: 1,
    title: "[書籍][B] ブロックチェーン革命",
    abstract: "本書は、 「超整理法」 「超文章法」などで有名な一橋大学名誉教授 野口 悠紀雄氏の著作である。 \n「ブロックチェーン技術」を、著者の言葉を借りてひと言で説明する と以下のようになる。 \n“私は、『仮想通貨革命』の「はじめに」で、「これは反乱ではありませぬ …",
    writer: "野口悠紀雄， 牧野貴樹 -  - ipa.go.jp",
    year: "2017",
    publisher: "jst.go.jp",
    citations:" 12",
    url: "https://www.ipa.go.jp/files/000062713.pdf"
  },{
    rank: 1,
    title: "[書籍][B] ブロックチェーン革命",
    abstract: "本書は、 「超整理法」 「超文章法」などで有名な一橋大学名誉教授 野口 悠紀雄氏の著作である。 \n「ブロックチェーン技術」を、著者の言葉を借りてひと言で説明する と以下のようになる。 \n“私は、『仮想通貨革命』の「はじめに」で、「これは反乱ではありませぬ …",
    writer: "野口悠紀雄， 牧野貴樹 -  - ipa.go.jp",
    year: "2017",
    publisher: "jst.go.jp",
    citations:" 12",
    url: "https://www.ipa.go.jp/files/000062713.pdf"
  },{
    rank: 1,
    title: "[書籍][B] ブロックチェーン革命",
    abstract: "本書は、 「超整理法」 「超文章法」などで有名な一橋大学名誉教授 野口 悠紀雄氏の著作である。 \n「ブロックチェーン技術」を、著者の言葉を借りてひと言で説明する と以下のようになる。 \n“私は、『仮想通貨革命』の「はじめに」で、「これは反乱ではありませぬ …",
    writer: "野口悠紀雄， 牧野貴樹 -  - ipa.go.jp",
    year: "2017",
    publisher: "jst.go.jp",
    citations:" 12",
    url: "https://www.ipa.go.jp/files/000062713.pdf"
  },{
    rank: 1,
    title: "[書籍][B] ブロックチェーン革命",
    abstract: "本書は、 「超整理法」 「超文章法」などで有名な一橋大学名誉教授 野口 悠紀雄氏の著作である。 \n「ブロックチェーン技術」を、著者の言葉を借りてひと言で説明する と以下のようになる。 \n“私は、『仮想通貨革命』の「はじめに」で、「これは反乱ではありませぬ …",
    writer: "野口悠紀雄， 牧野貴樹 -  - ipa.go.jp",
    year: "2017",
    publisher: "jst.go.jp",
    citations:" 12",
    url: "https://www.ipa.go.jp/files/000062713.pdf"
  },{
    rank: 1,
    title: "[書籍][B] ブロックチェーン革命",
    abstract: "本書は、 「超整理法」 「超文章法」などで有名な一橋大学名誉教授 野口 悠紀雄氏の著作である。 \n「ブロックチェーン技術」を、著者の言葉を借りてひと言で説明する と以下のようになる。 \n“私は、『仮想通貨革命』の「はじめに」で、「これは反乱ではありませぬ …",
    writer: "野口悠紀雄， 牧野貴樹 -  - ipa.go.jp",
    year: "2017",
    publisher: "jst.go.jp",
    citations:" 12",
    url: "https://www.ipa.go.jp/files/000062713.pdf"
  },{
    rank: 1,
    title: "[書籍][B] ブロックチェーン革命",
    abstract: "本書は、 「超整理法」 「超文章法」などで有名な一橋大学名誉教授 野口 悠紀雄氏の著作である。 \n「ブロックチェーン技術」を、著者の言葉を借りてひと言で説明する と以下のようになる。 \n“私は、『仮想通貨革命』の「はじめに」で、「これは反乱ではありませぬ …",
    writer: "野口悠紀雄， 牧野貴樹 -  - ipa.go.jp",
    year: "2017",
    publisher: "jst.go.jp",
    citations:" 12",
    url: "https://www.ipa.go.jp/files/000062713.pdf"
  },{
    rank: 1,
    title: "[書籍][B] ブロックチェーン革命",
    abstract: "本書は、 「超整理法」 「超文章法」などで有名な一橋大学名誉教授 野口 悠紀雄氏の著作である。 \n「ブロックチェーン技術」を、著者の言葉を借りてひと言で説明する と以下のようになる。 \n“私は、『仮想通貨革命』の「はじめに」で、「これは反乱ではありませぬ …",
    writer: "野口悠紀雄， 牧野貴樹 -  - ipa.go.jp",
    year: "2017",
    publisher: "jst.go.jp",
    citations:" 12",
    url: "https://www.ipa.go.jp/files/000062713.pdf"
  },]


  return (
    <Box w="65%" maxW="700px">
      {testData.map((res, i) => (
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
                        onClick={() => handleClickPickCount(res.url)}
                        _hover={{textDecoration: "underline", cursor: "pointer"}}>
                        Pick数: {count}
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