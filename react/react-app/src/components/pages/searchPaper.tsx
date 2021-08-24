import { Box, Flex, useBoolean } from "@chakra-ui/react";
import { useState } from "react";
import { memo, VFC } from "react";

import { SearchInput } from "../molecules/searchInput";
import { Condition } from "../organisms/search/condition";
import { Result } from "../organisms/search/result";

export const searchPaper: VFC = memo(() => {
  const thisYear = new Date().getFullYear();
  const tenYearsAgo = `${thisYear - 10}`
  const [period, setPeriod] = useState(tenYearsAgo);
  const [periodBool, setPeriodBool] = useBoolean();

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
        <Result />
      </Flex>
    </Box>
  )
})