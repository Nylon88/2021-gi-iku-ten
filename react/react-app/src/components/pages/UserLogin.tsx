import { Box, Button, Center, Divider, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import { memo, useState, VFC } from "react"
import { FaTwitter } from "react-icons/fa"
import { useMessage } from "../../hooks/useMessage"


export const UserLogin: VFC = memo(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { showMessage } = useMessage();

  return (
    <form>
      <Flex align="center" justify="center" h="calc(100vh - 134.109px)">
        <Box w="600px" border="1px" borderColor="gray.200" p="4">
          <Center>
            <Heading as="h1" size="lg" my="4">ログイン</Heading>
          </Center>
          <Box mx="10">
            <Stack>
              {/* <LabelInput label="メールアドレス" state={email} setState={setEmail} />
              <LabelInput label="パスワード" state={password} setState={setPassword} /> */}
            </Stack>
            <Button
              mt="5"
              bg="#406B15"
              color="white"
              borderRadius="0"
              _hover={{opacity: 0.8}}
              onClick={() => showMessage({title: "正常にログインできました", status: "success"})}
              isFullWidth
            >ログイン</Button>
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