import { Box, Center, Flex, Heading } from "@chakra-ui/react"
import { memo, VFC } from "react"

import { LoginInput } from "../organisms/user/loginInput"


export const UserLogin: VFC = memo(() => {
  return (
    <Flex w="80%" align="center" justify="center">
      <Box w="600px" border="1px" borderColor="gray.200" p="4">
        <Center>
          <Heading as="h1" size="lg" my="4">ログイン</Heading>
        </Center>
        <Box mx="10">
          <LoginInput />
        </Box>
      </Box>
    </Flex>
  )
})