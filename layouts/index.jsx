import { Box } from "@chakra-ui/core"
import { Main } from "../src/components/Main"

export default (frontMatter) => {
  return ({ children }) => {
    return (
      <Main>
        <Box py="3rem" px="2rem">
          {children}
        </Box>
      </Main>
    )
  }
}
