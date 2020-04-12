import { Box } from "@chakra-ui/core"

export const Main = (props) => {
  return (
    <Box
      width="100%"
      justifyContent="center"
      maxWidth="48rem"
      minHeight="100vh"
      {...props}
    />
  )
}
