import { Flex, useColorMode } from "@chakra-ui/core"

export const Footer = (props) => {
  const { colorMode } = useColorMode()
  const bgColor = { light: "white", dark: "black" }

  return (
    <Flex
      as="footer"
      width="100%"
      justifyContent="center"
      alignItems="center"
      py="2rem"
      bg={bgColor[colorMode]}
      {...props}
    />
  )
}
