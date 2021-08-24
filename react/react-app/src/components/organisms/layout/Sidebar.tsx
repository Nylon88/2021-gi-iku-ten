import { memo, VFC } from "react";
import { Box, Button, Flex, Image, Link, Spacer } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";

import { Selector } from "../../../redux/users/ActionType";
import { getUserName, getUserState } from "../../../redux/users/selectors";
import { signOut } from "../../../redux/users/Operations";
import { useMessage } from "../../../hooks/useMessage";
import { SearchInput } from "../../molecules/searchInput";

export const Sidebar:VFC = memo(() => {
  const selector = useSelector((state: Selector) => state);
  const userName = getUserName(selector)
  const LoginState = getUserState(selector)

  const dispatch = useDispatch();

  return (
    <Box w="20%" h="100vh" bg="gray.100">
      <Link onClick={() => dispatch(push("/"))}>
        <Image
          src={`${process.env.PUBLIC_URL}/PaperPicks.png`}
          alt="PaperPicks Logo"
          htmlWidth="200"
          mt="8"
          ml="14"
          _hover={{cursor: "pointer"}}
        />
      </Link>
    </Box>
  )
})