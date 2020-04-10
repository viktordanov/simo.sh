import { Flex, Heading, useColorMode } from "@chakra-ui/core"

export const Hero = ({ title }) => {
  const { colorMode } = useColorMode()
  const bgColor = { light: "white", dark: "black" }

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100vh"
      bg={bgColor[colorMode]}
    >
      <Heading fontSize="7vw">{title}</Heading>
    </Flex>
  )
}

Hero.defaultProps = {
  title: "with-chakra-ui",
}
