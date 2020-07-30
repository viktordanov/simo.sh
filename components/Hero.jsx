import { Flex, Heading, Image, useColorMode } from "@chakra-ui/core"

export const Hero = ({ title, src = "", height }) => {
  const { colorMode } = useColorMode()
  const bgColor = { light: "white", dark: "black" }

  return (
    <Flex
      justifyContent="center"
      pt="2rem"
      alignItems="center"
      width="100%"
      height={height}
      flexDirection={{ base: "column", md: "row" }}
      bg={bgColor[colorMode]}
    >
      <Heading size="2xl">{title}</Heading>
      {src && <Image src={src} objectFit="cover" size="md" />}
    </Flex>
  )
}
