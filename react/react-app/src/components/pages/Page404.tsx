import { Flex, Text } from "@chakra-ui/react"
import { memo, VFC } from "react"

export const Page404: VFC = memo(() => {
  return (
    <Flex w="80%" align="center" justify="center">
      <Text fontWeight="bold">お探しのページは存在しません。</Text>
    </Flex>
  )
})