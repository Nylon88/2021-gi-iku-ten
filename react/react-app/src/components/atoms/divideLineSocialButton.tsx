import { memo } from "react"
import { Divider, Flex, Text } from "@chakra-ui/react"

export const DivideLineSocialButton = memo(() => {
  return (
    <Flex my="2">
      <Divider my="4" />
      <Text mx="4" my="1">or</Text>
      <Divider my ="4" />
    </Flex>
  )
})