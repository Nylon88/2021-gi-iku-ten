import { VFC } from "react";
import { Box, Center, Flex, Heading } from "@chakra-ui/react";

import { RegistrationInput } from "../organisms/user/registrationInput";
import { TwitterButton } from "../atoms/twitterButton";
import { DivideLineSocialButton } from "../atoms/divideLineSocialButton";
import { GoogleButton } from "../atoms/googleButton";

export const UserRegistration: VFC = () =>{
  return (
    <Flex w="80%" align="center" justify="center">
      <Box w="600px" border="1px" borderColor="gray.200" p="4">
        <Center>
          <Heading as="h1" size="lg" my="4">新規登録</Heading>
        </Center>
        <Box mx="10">
          <RegistrationInput />
          <DivideLineSocialButton />
          <TwitterButton />
          <GoogleButton />
        </Box>
      </Box>
    </Flex>
  )
}