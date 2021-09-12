import { Box, Flex, useBoolean } from "@chakra-ui/react";
import { useState } from "react";
import { memo, VFC } from "react";
import { useSelector } from "react-redux";
import { Selector } from "../../redux/search/ActionType";
import { searchResultSelector } from "../../redux/search/selectors";

import { SearchInput } from "../molecules/searchInput";
import { Condition } from "../organisms/search/condition";
import { DefaultView } from "../organisms/search/defautView";
import { Result } from "../organisms/search/result";

export const searchPaper: VFC = memo(() => {
  const thisYear = new Date().getFullYear();
  const tenYearsAgo = `${thisYear - 10}`
  const [period, setPeriod] = useState(tenYearsAgo);
  const [periodBool, setPeriodBool] = useBoolean();

  const searchSelector = useSelector((state: Selector) => state);
  const resultData = searchResultSelector(searchSelector);

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
        {resultData.length ? (
          <Result
            resultData={resultData}
          />
        ) : (
          <DefaultView />
        )}
      </Flex>
    </Box>
  )
})