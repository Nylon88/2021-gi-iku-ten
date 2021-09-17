import { memo, VFC } from "react";
import { Box, Divider, Image, Link, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";

import { Selector } from "../../../redux/users/ActionType";
import { getUserState } from "../../../redux/users/selectors";
import { signOut } from "../../../redux/users/Operations";
import { useMessage } from "../../../hooks/useMessage";
import auth from "../../../firebase";

export const Sidebar:VFC = memo(() => {
  const selector = useSelector((state: Selector) => state);
  const LoginState = getUserState(selector)
  const userId = auth.currentUser?.uid

  const dispatch = useDispatch();
  const showMessage = useMessage();

  return (
    <Box w="20%" minW="300px" minH="100vh" maxH="100%" bg="#B6C0A8">
      <Link onClick={() => dispatch(push("/"))} position="fixed">
        <Image
          src={`${process.env.PUBLIC_URL}/PaperPicks.png`}
          alt="PaperPicks Logo"
          htmlWidth="200"
          mt="8"
          ml="14"
          _hover={{cursor: "pointer"}}
        />
      </Link>
      {
        LoginState ? (
          <>
            <Box ml="20" position="fixed" bottom="20">
              <Text
                fontSize="lg"
                fontWeight="bold"
                style={{cursor: "pointer"}}
                _hover={{color: "#777"}}
                onClick={() => dispatch(push(`/users/${userId}`))}
              >
                プロフィール
              </Text>
              <Divider
                w="200%"
                mb="3"
                borderColor="#333"
              />
              <Text
                fontSize="lg"
                fontWeight="bold"
                style={{cursor: "pointer"}}
                _hover={{color: "#777"}}
                onClick={() => dispatch(signOut(showMessage))}>
                ログアウト
              </Text>
              <Divider
                w="200%"
                mb="3"
                borderColor="#333"
              />
            </Box>
          </>
        ) : (
          <Box ml="20" position="fixed" bottom="20">
            <Text
              fontSize="lg"
              fontWeight="bold"
              style={{cursor: "pointer"}}
              _hover={{color: "#777"}}
              onClick={() => dispatch(push("/sign_up"))}
            >
              新規登録
            </Text>
            <Divider
              w="200%"
              mb="3"
              borderColor="#333"
            />
            <Text
              fontSize="lg"
              fontWeight="bold"
              style={{cursor: "pointer"}}
              _hover={{color: "#777"}}
              onClick={() => dispatch(push("/sign_in"))}>
              ログイン
            </Text>
            <Divider
              w="200%"
              mb="3"
              borderColor="#333"
            />
          </Box>
        )
      }
    </Box>
  )
})