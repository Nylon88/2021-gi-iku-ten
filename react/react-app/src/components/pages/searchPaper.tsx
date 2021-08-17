import { Box, Center, Flex } from "@chakra-ui/react";
import { memo, VFC } from "react";

import { SearchCondition } from "../molecules/searchCondition";
import { SearchInput } from "../molecules/searchInput";
import { Result } from "../organisms/search/result";

export const searchPaper: VFC = memo(() => {
  const thisYear = new Date().getFullYear()

  return (
    <Center mt={16}>
      <Box w="60%" maxW="880px">
        <SearchInput />
        <Flex mt={8}>
          <Box w="20%" mr={16}>
            <SearchCondition title="期間" maxW={20} defaultV={thisYear - 10} min={1900} max={thisYear}/>
            <SearchCondition title="引用数" maxW={14} defaultV={0} min={0} />
          </Box>
          <Result />
        </Flex>
      </Box>
    </Center>
  )
})