import { memo, VFC } from "react";
import { Button, Flex, Image, Link, Spacer } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";

import { Selector } from "../../../redux/users/ActionType";
import { getUserName, getUserState } from "../../../redux/users/selectors";
import { signOut } from "../../../redux/users/Operations";
import { useMessage } from "../../../hooks/useMessage";

export const Header:VFC = memo(() => {
  const selector = useSelector((state: Selector) => state);
  const userName = getUserName(selector)
  const LoginState = getUserState(selector)

  const dispatch = useDispatch();
  const { showMessage } = useMessage();

  return (
    <Flex mx={32} my={3} align="flex-end">
      <Link onClick={() => dispatch(push("/"))}>
        <Image
          src={`${process.env.PUBLIC_URL}/PaperPicks.png`}
          alt="PaperPicks Logo"
          htmlWidth="400"
          _hover={{cursor: "pointer"}}
        />
      </Link>
      <Spacer />
      {LoginState ? (
        <>
          <Button
            onClick={() => dispatch(signOut({showMessage}))}
          >ログアウト</Button>
          <h1>{userName}</h1>
        </>
      ) : (
        <>
          <Button
            mb={3}
            mx={5}
            bg="white"
            borderRadius="0"
            _hover={{textDecoration: "underline"}}
            onClick={() => dispatch(push("/sign_up"))}
          >新規登録</Button>
          <Button
            mb={3}
            bg="#406B15"
            color="white"
            borderRadius="0"
            _hover={{opacity: 0.8}}
            onClick={() => dispatch(push("/sign_in"))}
          >ログイン</Button>
        </>
      )}
    </Flex>
  )
})