import {
  Box,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import axios from "axios";
import { memo, useState, VFC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMessage } from "../../../hooks/useMessage";
import { searchFavoritePapers } from "../../../redux/search/Operations";
import { favoriteResultSelector } from "../../../redux/search/selectors";
import { Selector } from "../../../redux/search/ActionType";

import { API_ENDPOINT } from "../../../template/apiEndpoint";
import { favoriteData } from "./favoriteData";
import { ResultData } from "./resultData";

export const DefaultView: VFC = memo(() => {
  const [pickData, setPickData] = useState<Number[]>([]);
  const [recentData, setRecentData] = useState<favoriteData[]>([]);
  const dispatch = useDispatch();
  const { showMessage } = useMessage()
  const selector = useSelector((state: Selector) => state)
  const favoriteData = favoriteResultSelector(selector)

    // axios.get(`${API_ENDPOINT}/search`)
    // .then((res) => {
      false && dispatch(searchFavoritePapers({showMessage}))
      console.log("err")
    //   setPickData(res.data[0].favorite_picks);
    //   setRecentData(res.data[0].recent);
    // })
    // .catch((err) => console.log(`error: ${err}`) )
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
            {favoriteData?.map((data, i) => (
              <ResultData
                data={data}
                i={i}
                pickData={pickData}
              />
            ))}
          </TabPanel>
          <TabPanel>
            {recentData.map((data, i) => (
              <ResultData
                data={data}
                i={i}
                pickData={pickData}
              />
            ))}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
})