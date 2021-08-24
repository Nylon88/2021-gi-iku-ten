import { Flex, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react"
import { ChangeEvent, KeyboardEvent, memo, useState, VFC } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { useMessage } from "../../hooks/useMessage";
import { searchPapers } from "../../redux/search/Operations";

type Props = {
  period: string,
  bool: boolean
}

export const SearchInput: VFC<Props> = memo((props) => {
  const { period, bool } = props;
  const [word, setWord] = useState('')
  const dispatch = useDispatch();
  const { showMessage } = useMessage();

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => setWord(e.target.value)

  const handleClickSearch = () => {
    if (bool) {
      dispatch(searchPapers({word, period, showMessage}));
    } else {
      dispatch(searchPapers({word, period: "-1", showMessage}));
    }
  }

  const handleKeyPressSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClickSearch()
    }
  }

  const handleDeleteWord = () => {
    setWord('')
  }

  return (
    <Flex justify="center" mt="12">
      <InputGroup w="60%" maxW="880px">
        <InputLeftElement
          children={<FaSearch color="#EAEAEA"/>}
          onClick={handleClickSearch}
        />
        <Input
          borderRadius="0"
          value={word}
          onChange={handleChangeInput}
          onKeyPress={(e) => handleKeyPressSearch(e)}
        />
        {
          word ? (
            <InputRightElement
              children={<FaTimes color="#EAEAEA" />}
              onClick={handleDeleteWord}
            />
          ) : null
        }
      </InputGroup>
    </Flex>
  )
})