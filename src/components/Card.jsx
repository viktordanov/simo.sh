import { Box, useColorMode } from "@chakra-ui/core"

export const Card = (props) => {
  const { colorMode } = useColorMode()
  const bgColor = { light: "white", dark: "black" }

  return (
    <Box
      width="100%"
      backgroundColor={bgColor[colorMode]}
      py="3rem"
      px="2rem"
      borderWidth={{ base: "0px", md: "1px" }}
      rounded={{ base: "0px", md: "10px" }}
      {...props}
    />
  )
}
