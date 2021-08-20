import { Flex, Text } from "@chakra-ui/react"
import { memo, VFC } from "react"

export const Page404: VFC = memo(() => {
  return (
    <Flex align="center" justify="center" h="calc(100vh - 134.109px)">
      <Text fontWeight="bold">お探しのページは存在しません。</Text>
    </Flex>
  )
})