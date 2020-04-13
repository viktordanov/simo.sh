import { Box, Flex, Heading } from "@chakra-ui/core"
import { ProjectSmall } from "../components/ProjectSmall"
import { frontMatter as projects } from "./projects/**/*.mdx"

const showcaseProjects = projects
  .map((v) => {
    if (v.order > 0) {
      return v
    }

    return { ...v, order: -1 }
  })
  .sort((a, b) => {
    if (a.showcase && b.showcase) {
      return a.order - b.order
    }

    return b.order - a.order
  })
  .map((p) => (
    <Box m={7} flex={1} key={p.title}>
      <ProjectSmall {...p} />
    </Box>
  ))

export default () => (
  <>
    <Heading textAlign="left">Projects 🤘</Heading>
    <Flex direction="column" marginY="1rem">
      {showcaseProjects}
    </Flex>
  </>
)
