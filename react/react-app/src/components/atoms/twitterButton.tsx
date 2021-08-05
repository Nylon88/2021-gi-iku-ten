import { memo } from "react"
import { Button } from "@chakra-ui/react"
import { FaTwitter } from "react-icons/fa"

export const TwitterButton = memo(() => {
  return (
    <Button
      my={2}
      colorScheme="twitter"
      borderRadius="0"
      isFullWidth
      leftIcon={<FaTwitter />}
      shadow="base"
    >Sign Up with Twitter</Button>
  )
})