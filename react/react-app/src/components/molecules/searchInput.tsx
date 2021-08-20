import {Input, InputGroup, InputLeftElement, InputRightElement} from "@chakra-ui/react"
import { ChangeEvent, memo, useState, VFC } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { useMessage } from "../../hooks/useMessage";
import { searchPapers } from "../../redux/search/Operations";

type Props = {
  period: string
}

export const SearchInput: VFC<Props> = memo((props) => {
  const { period } = props;
  const [word, setWord] = useState('')
  const dispatch = useDispatch();
  const { showMessage } = useMessage();

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => setWord(e.target.value)

  const handleClickSearch = () => {
    dispatch(searchPapers({word, period, showMessage}));
  }


  return (
    <InputGroup>
      <InputLeftElement
        children={<FaSearch color="#EAEAEA"/>}
        onClick={handleClickSearch}
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