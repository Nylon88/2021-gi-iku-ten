import { Box, Button, Center, Divider, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import { memo, VFC } from "react"
import { FaTwitter } from "react-icons/fa"
import { useMessage } from "../../hooks/useMessage"
import { LoginInput } from "../organisms/user/loginInput"


export const UserLogin: VFC = memo(() => {

  const { showMessage } = useMessage();

  return (
    <form>
      <Flex align="center" justify="center" h="calc(100vh - 134.109px)">
        <Box w="600px" border="1px" borderColor="gray.200" p="4">
          <Center>
            <Heading as="h1" size="lg" my="4">ログイン</Heading>
          </Center>
          <Box mx="10">
            <LoginInput />
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
})