import { memo } from "react"
import { Button, Flex, Image } from "@chakra-ui/react"

export const GoogleButton = memo(() => {
  return (
    <Flex
      my={2}
      pr={3}
      align="center"
      justify="center"
      boxShadow="base"
      _hover={{cursor: "pointer", bg: "#efefef", transition: 3}}
    >
      <Image
        src={`${process.env.PUBLIC_URL}/google.svg`}
        alt="Google Logo"
        />
      <Button
        p="0"
        color="#333333"
        colorScheme="white"
      >Sign Up with Google</Button>
    </Flex>
  )
})