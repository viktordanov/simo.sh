import { Flex, Image, Heading, useColorMode } from "@chakra-ui/core"

export const Hero = ({ title }) => {
  const { colorMode } = useColorMode()
  const bgColor = { light: "white", dark: "black" }

  return (
    <Flex
      justifyContent="center"
      pt="2rem"
      alignItems="center"
      width="100%"
      flexDirection={{ base: "column", sm: "row" }}
      bg={bgColor[colorMode]}
    >
      <Heading size="2xl">{title}</Heading>
      <Image src="me-transparent.png" objectFit="cover" size="md" />
    </Flex>
  )
}

Hero.defaultProps = {
  title: "with-chakra-ui",
}
