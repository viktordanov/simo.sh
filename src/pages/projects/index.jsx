import { Box } from "@chakra-ui/core"
import { Main } from "../../components/Main"
import Projects from "../../content/projects.mdx"

export default () => {
  return (
    <>
      <Main>
        <Box minW="100%" py="3rem" px="2rem">
          <Projects />
        </Box>
      </Main>
    </>
  )
}
