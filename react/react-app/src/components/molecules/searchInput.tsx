import {Input, InputGroup, InputLeftElement, InputRightElement} from "@chakra-ui/react"
import { ChangeEvent, memo, useEffect, useState, VFC } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { useMessage } from "../../hooks/useMessage";
import { searchPapers } from "../../redux/search/Operations";


export const SearchInput: VFC = memo(() => {
  const [word, setWord] = useState('')
  const dispatch = useDispatch();
  const { showMessage } = useMessage();

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => setWord(e.target.value)

  useEffect(() => {
    const searchPaper = () => {
      dispatch(searchPapers({word, showMessage}));
    }
    let debouncer = setTimeout(() => {
      searchPaper();
    }, 1000);
    return () => {
      clearTimeout(debouncer);
    }
  }, [word])

  return (
    <InputGroup>
      <InputLeftElement
        children={<FaSearch color="#EAEAEA"/>}
      />
      <Input
        borderRadius="0"
        vale={word}
        onChange={handleChangeInput}
      />
      <InputRightElement
        children={<FaTimes color="#EAEAEA" />}
      />
    </InputGroup>
  )
})