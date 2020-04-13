import { Badge, Box, Flex, Heading } from "@chakra-ui/core"
import { Main } from "../src/components/Main"

export default (frontMatter) => {
  return ({ children }) => {
    return (
      <>
        <Heading fontSize="3.6rem" mb="1rem" textAlign="center">
          {frontMatter.title}
        </Heading>
        <Flex wrap="wrap">
          {frontMatter.tags?.map((t) => (
            <Badge
              rounded="full"
              variantColor="teal"
              key={t}
              px="0.4rem"
              mr={1}
              my={[1, 0]}
            >
              {t}
            </Badge>
          ))}
        </Flex>
        <Main>
          <Box py="3rem" px="2rem" bgColor="white">
            {children}
          </Box>
        </Main>
      </>
    )
  }
}
