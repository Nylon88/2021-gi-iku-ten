import { memo } from "react"
import { Button } from "@chakra-ui/react"
import { FaTwitter } from "react-icons/fa"
import auth, { twitterProvider } from "../../firebase"

export const TwitterButton = memo(() => {
  const handleClickTwitterAuth = () => {
    auth.signInWithPopup(twitterProvider)
    .then((res) => {
      console.log(res.user)
    })
    .catch((err) => console.log(err))
  }

  return (
    <Button
      my={2}
      colorScheme="twitter"
      borderRadius="0"
      isFullWidth
      leftIcon={<FaTwitter />}
      shadow="base"
      onClick={handleClickTwitterAuth}
    >Sign Up with Twitter</Button>
  )
})