import { Box, Text } from "@chakra-ui/core"
import { Main } from "../../components/Main"
import { SectionTitle } from "../../components/SectionTitle"

export default () => {
  return (
    <>
      <Main>
        <Box width="100%" py="3rem" px="2rem">
          <SectionTitle>Projects 🤘</SectionTitle>
          <Text as="p" fontSize="xl" width>
            Here you can find all of my projects.
          </Text>
        </Box>
      </Main>
    </>
  )
}
