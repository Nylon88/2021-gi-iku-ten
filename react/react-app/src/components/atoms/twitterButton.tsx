import { memo } from "react"
import { Button } from "@chakra-ui/react"
import { FaTwitter } from "react-icons/fa"

export const TwitterButton = memo(() => {
  return (
    <Button
      colorScheme="twitter"
      borderRadius="0"
      size="sm"
      isFullWidth
      leftIcon={<FaTwitter />}
    >Sign Up with Twitter</Button>
  )
})