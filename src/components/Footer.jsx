import { Flex, Text, useColorMode } from "@chakra-ui/core"

export const Footer = () => {
  const { colorMode } = useColorMode()
  const bgColor = { light: "white", dark: "black" }
  const color = { light: "black", dark: "white" }

  return (
    <Flex
      as="footer"
      width="100%"
      justifyContent="center"
      alignItems="center"
      py="2rem"
      bg={bgColor[colorMode]}
    >
      <Text color={color[colorMode]}>Simo Aleksandrov 2020</Text>
    </Flex>
  )
}
