// https://github.com/leerob/leerob.io/blob/master/pages/404.js
import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/core"
import NextLink from "next/link"
import React from "react"

export default () => {
  const { colorMode } = useColorMode()
  const color = {
    light: "black",
    dark: "white",
  }

  return (
    <Stack
      as="main"
      spacing={8}
      justifyContent="center"
      alignItems="flex-start"
      m="0 auto 4rem auto"
      maxWidth="700px"
    >
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        maxWidth="700px"
      >
        <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
          404 - Not Found
        </Heading>
        <Text color={color[colorMode]} my={4}>
          You just found a page that doesn't exist! :(
        </Text>
        <NextLink href="/" passHref>
          <Button as="a" p={[1, 4]} w="250px" fontWeight="bold" m="3rem auto 0">
            Go back!
          </Button>
        </NextLink>
      </Flex>
    </Stack>
  )
}
