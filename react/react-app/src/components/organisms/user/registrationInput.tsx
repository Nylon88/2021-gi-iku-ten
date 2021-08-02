import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { VFC } from "react";

export const RegistrationInput: VFC = () => {
  return (
    <form>
      <Stack>
        <FormControl isRequired>
          <FormLabel>ユーザー名</FormLabel>
          <Input
            placeholder={"ユーザー名を入力してください"}
            size="lg"
            borderRadius="0"
            name="userName"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>メールアドレス</FormLabel>
          <Input
            placeholder={"メールアドレスを入力してください"}
            size="lg"
            borderRadius="0"
            name="email"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>パスワード</FormLabel>
          <Input
            placeholder={"パスワードを入力してください"}
            size="lg"
            borderRadius="0"
            name="password"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>パスワード（確認用）</FormLabel>
          <Input
            placeholder={"パスワード（確認用）を入力してください"}
            size="lg"
            borderRadius="0"
            name="passwordConf"
          />
        </FormControl>
      </Stack>
      <Button
        mt="5"
        bg="#406B15"
        color="white"
        borderRadius="0"
        _hover={{opacity: 0.8}}
        isFullWidth
      >登録</Button>
    </form>
  )
}