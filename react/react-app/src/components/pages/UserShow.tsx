import { Flex, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

import auth from "../../firebase";
import { Selector } from "../../redux/users/ActionType";
import { getUserState } from "../../redux/users/selectors";
import { PickedPaper } from "../organisms/user/pickedPaper";

export const UserShow: VFC = memo(() => {
  const selector = useSelector((state: Selector) => state);
  const userStatus = getUserState(selector);
  const currentUserId = auth.currentUser?.uid;
  const location = useLocation();

  return (
    <Flex w="80%" align="center" justify="center">
      {userStatus && location.pathname === `/users/${currentUserId}` && (
        <PickedPaper />
      )}
      {userStatus && location.pathname !== `/users/${currentUserId}` && (
        <Text fontWeight="bold">自身のプロフィールページしか閲覧できません</Text>
      )}
      {userStatus || (
        <Text fontWeight="bold">ログインしてください</Text>
      ) }
    </Flex>
  )
})