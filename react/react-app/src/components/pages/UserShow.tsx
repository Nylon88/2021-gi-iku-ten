import { Flex, Text } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const UserShow: VFC = memo(() => {
  return (
    <Flex w="80%" align="center" justify="center">
      <Text>UserShow</Text>
    </Flex>
  )
})