import { Box, Center, Flex, useBoolean } from "@chakra-ui/react";
import { useState } from "react";
import { memo, VFC } from "react";

import { SearchCondition } from "../molecules/searchCondition";
import { SearchInput } from "../molecules/searchInput";
import { Result } from "../organisms/search/result";

export const searchPaper: VFC = memo(() => {
  const thisYear = new Date().getFullYear();
  const tenYearsAgo = `${thisYear - 10}`
  const [period, setPeriod] = useState(tenYearsAgo);
  const [periodBool, setPeriodBool] = useBoolean();

  const handlePeriod = (valueAsString: string) => setPeriod(valueAsString);

  return (
    <Center mt={16}>
      <Box w="60%" maxW="880px">
        <SearchInput period={period} bool={periodBool} />
        <Flex mt={8}>
          <Box w="20%" mr={16}>
            <SearchCondition
              title="期間"
              maxW={20}
              value={period}
              min={1900}
              max={thisYear}
              bool={periodBool}
              setBool={setPeriodBool}
              onChange={handlePeriod}
            />
            <SearchCondition
              title="引用数"
              maxW={14}
              defaultValue={"0"}
              min={0}
            />
          </Box>
          <Result />
        </Flex>
      </Box>
    </Center>
  )
})