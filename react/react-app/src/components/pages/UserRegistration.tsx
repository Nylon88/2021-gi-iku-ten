import { VFC } from "react";
import { Box, Button, calc, Center, Divider, Flex, Heading, Stack, Text, useToast} from "@chakra-ui/react";
import { FaTwitter } from 'react-icons/fa'

import { LabelInput } from "../molecules/LabelInput";
import { useSelector } from "react-redux";

export const UserRegistration: VFC = () => {

  const toast = useToast  ();
  const toaster = () =>
    toast({
      title: "正常にログインできました",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top"
    })

  return (
    <form>
      <Flex align="center" justify="center" h="calc(100vh - 134.109px)">
        <Box w="600px" border="1px" borderColor="gray.200" p="4">
          <Center>
            <Heading as="h1" size="lg" my="4">新規登録</Heading>
          </Center>
          <Box mx="10">
            <Stack>
              <LabelInput label="ユーザー名" />
              <LabelInput label="メールアドレス" />
              <LabelInput label="パスワード" />
              <LabelInput label="パスワード（確認用）" />
            </Stack>
            <Button
              mt="5"
              bg="#406B15"
              color="white"
              borderRadius="0"
              onClick={toaster}
              _hover={{opacity: 0.8}}
              isFullWidth
            >登録</Button>
            <Flex my="2">
              <Divider my="4" />
              <Text mx="4" my="1">or</Text>
              <Divider my ="4" />
            </Flex>
          </Box>
          <Flex justify="center">
            <Button
              mx="4"
              colorScheme="twitter"
              borderRadius="0"
              size="sm"
              leftIcon={<FaTwitter />}
            >Sign Up with Twitter</Button>
          </Flex>
        </Box>
      </Flex>
    </form>
  )
}