import { Box, Center, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { memo } from "react";
import { VFC } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

export const searchPaper: VFC = memo(() => {
  return (
    <Center mt={16}>
      <Box>
        <InputGroup>
          <InputLeftElement
            children={<FaSearch color="#EAEAEA"/>}
          />
          <Input
            w="60%"
            minW="880px"
            borderRadius="0"
            // focusBorderColor="#9AAE09"
          />
          <InputRightElement
            children={<FaTimes color="#EAEAEA" />}
          />
        </InputGroup>
      </Box>
    </Center>
  )
})