import { Box, Heading } from "@chakra-ui/core"
import { Main } from "../src/components/Main"

export default (frontMatter) => {
  return ({ children }) => {
    return (
      <>
        <Heading size="2xl" mb="1rem">
          {frontMatter.title}
        </Heading>
        <Main>
          <Box py="3rem" px="2rem">
            {children}
          </Box>
        </Main>
      </>
    )
  }
}
