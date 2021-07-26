import { memo, VFC } from "react";
import { Button, Flex, Image } from "@chakra-ui/react";

export const Header:VFC = memo(() => {
  // あとでReduxでログイン状態を判定
  const LoginState = false;

  return (
    <Flex mx={32} my={3} align="flex-end" justify="space-between">
      <Image
        src={`${process.env.PUBLIC_URL}/PaperPicks.png`}
        alt="PaperPicks Logo"
        htmlWidth="400"
        _hover={{cursor: "pointer"}}
      />
      {LoginState ? (
        <h1>test</h1>
      ) : (
        <Button mb={3} bg="#406B15" color="white" borderRadius="0" _hover={{opacity: 0.8}}>ログイン</Button>
      )}
    </Flex>
  )
})