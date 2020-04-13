import { Box, Heading } from "@chakra-ui/core"
import { Main } from "../src/components/Main"

export default (frontMatter) => {
  return ({ children }) => {
    return (
      <>
        <Heading fontSize="3.6rem" mb="1rem" textAlign="center">
          {frontMatter.title}
        </Heading>
        <Main>
          <Box py="3rem" px="2rem" bgColor="white">
            {children}
          </Box>
        </Main>
      </>
    )
  }
}
