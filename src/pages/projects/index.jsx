import { Text } from "@chakra-ui/core"
import { Main } from "../../components/Main"
import { SectionTitle } from "../../components/SectionTitle"

export default () => {
  return (
    <>
      <Main>
        <SectionTitle>Projects 🤘</SectionTitle>
        <Text as="p" fontSize="xl" width>
          Here you can find all of my projects.
        </Text>
      </Main>
    </>
  )
}
