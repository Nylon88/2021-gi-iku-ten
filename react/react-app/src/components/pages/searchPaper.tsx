import { Box, Flex, Skeleton, useBoolean } from "@chakra-ui/react";
import { useState } from "react";
import { memo, VFC } from "react";
import { useSelector } from "react-redux";
import { Selector } from "../../redux/search/ActionType";
import { Selector as SkeletonSelector } from "../../redux/boolean/ActionType";
import { searchResultSelector } from "../../redux/search/selectors";

import { SearchInput } from "../molecules/searchInput";
import { Condition } from "../organisms/search/condition";
import { DefaultView } from "../organisms/search/defautView";
import { Result } from "../organisms/search/result";
import { getSkeleton } from "../../redux/boolean/selectors";

export const searchPaper: VFC = memo(() => {
  const thisYear = new Date().getFullYear();
  const tenYearsAgo = `${thisYear - 10}`
  const [period, setPeriod] = useState(tenYearsAgo);
  const [periodBool, setPeriodBool] = useBoolean();

  const searchSelector = useSelector((state: Selector) => state);
  const resultData = searchResultSelector(searchSelector);

  const skeletonSelector = useSelector((state: SkeletonSelector) => state.boolean.boolean);
  const skeleton = getSkeleton(skeletonSelector);

  const handlePeriod = (valueAsString: string) => setPeriod(valueAsString);

  return (
    <Box w="80%">
      <SearchInput period={period} bool={periodBool} />
      <Flex mt={8} justify="center">
        <Condition
          period={period}
          thisYear={thisYear}
          periodBool={periodBool}
          setPeriodBool={setPeriodBool}
          handlePeriod={handlePeriod}
        />
        {!skeleton ? (
          <Box w="65%" maxW="700px" mb="16">
            {[...Array(10)].map((_, i) => (
              <Box key={i} px="5" py="3" style={(i % 2 === 0) ? {backgroundColor: "#FAFAFA"} : {background: "#EAEAEA"}}>
                <Skeleton height="25px" />
                <Skeleton height="13px" mt="6px" />
                <Skeleton height="13px" mt="7px" />
                <Skeleton height="13px" mt="7px" />
                <Skeleton height="8px" mt="10px" />
              </Box>
            ))}
          </Box>
        ) : (
          <>
            {resultData.length ? (
              <Result
                resultData={resultData}
              />
            ) : (
              <DefaultView />
            )}
          </>
        )}
      </Flex>
    </Box>
  )
})