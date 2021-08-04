import { Box, Center, Flex, Heading } from "@chakra-ui/react"
import { memo, VFC } from "react"

import { DivideLineSocialButton } from "../atoms/divideLineSocialButton"
import { TwitterButton } from "../atoms/twitterButton"
import { LoginInput } from "../organisms/user/loginInput"


export const UserLogin: VFC = memo(() => {
  return (
    <Flex align="center" justify="center" h="calc(100vh - 134.109px)">
      <Box w="600px" border="1px" borderColor="gray.200" p="4">
        <Center>
          <Heading as="h1" size="lg" my="4">ログイン</Heading>
        </Center>
        <Box mx="10">
          <LoginInput />
          <DivideLineSocialButton />
        </Box>
        <Flex justify="center">
          <TwitterButton />
        </Flex>
      </Box>
    </Flex>
  )
})