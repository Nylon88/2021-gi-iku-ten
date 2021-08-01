import {Input, InputGroup, InputLeftElement, InputRightElement} from "@chakra-ui/react"
import { memo, VFC } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";


export const SearchInput: VFC = memo(() => {
  return (
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
  )
})