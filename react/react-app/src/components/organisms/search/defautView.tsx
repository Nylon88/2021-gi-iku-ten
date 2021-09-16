import {
  Box,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import axios from "axios";
import { memo, useEffect, useState, VFC } from "react";

import { API_ENDPOINT } from "../../../template/apiEndpoint";
import { favoriteData } from "./favoriteData";
import { ResultData } from "./resultData";

export const DefaultView: VFC = memo(() => {
  const [favoriteData, setFavoriteData] = useState<favoriteData[]>([]);
  const [pickData, setPickData] = useState<Number[]>([]);
  const [recentData, setRecentData] = useState<favoriteData[]>([]);

  useEffect(() => {
    axios.get(`${API_ENDPOINT}/search`)
    .then((res) => {
      setFavoriteData(res.data[0].favorite);
      setPickData(res.data[0].favorite_picks);
      setRecentData(res.data[0].recent);
    })
    .catch((err) => console.log(err) )
  },[])
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
            {favoriteData.map((data, i) => (
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