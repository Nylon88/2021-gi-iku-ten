import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { memo } from "react";
import { VFC } from "react";

import { SearchInput } from "../molecules/searchInput";

export const searchPaper: VFC = memo(() => {
  return (
    <Center mt={16}>
      <Box>
        <SearchInput />
      </Box>
    </Center>
  )
})