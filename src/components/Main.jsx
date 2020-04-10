import { Box, useColorMode } from "@chakra-ui/core"

export const Main = (props) => {
  return (
    <Box
      width="100%"
      justifyContent="center"
      minHeight="100vh"
      maxWidth="48rem"
      {...props}
    />
  )
}
