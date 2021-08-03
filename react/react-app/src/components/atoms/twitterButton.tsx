import { memo } from "react"
import { Button } from "@chakra-ui/react"
import { FaTwitter } from "react-icons/fa"

export const TwitterButton = memo(() => {
  return (
    <Button
      mx="4"
      colorScheme="twitter"
      borderRadius="0"
      size="sm"
      leftIcon={<FaTwitter />}
    >Sign Up with Twitter</Button>
  )
})