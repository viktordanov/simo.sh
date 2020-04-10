import { Box, useColorMode } from "@chakra-ui/core"

export const Card = (props) => {
  const { colorMode } = useColorMode()
  const bgColor = { light: "white", dark: "gray.900" }

  return (
    <Box
      width="100%"
      marginTop={{ base: "0px", md: "-2rem" }}
      backgroundColor={bgColor[colorMode]}
      py="3rem"
      borderWidth={{ base: "0px", md: "1px" }}
      rounded={{ base: "0px", md: "10px" }}
      px="2rem"
      justifyContent="center"
      {...props}
    />
  )
}
