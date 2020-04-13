import { Box } from "@chakra-ui/core"

export default (frontMatter) => {
  return ({ children }) => {
    return (
      <Box py="3rem" px="2rem">
        {children}
      </Box>
    )
  }
}
