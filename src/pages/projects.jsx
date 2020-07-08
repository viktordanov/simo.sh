import { Box } from "@chakra-ui/core"
import { NextSeo } from "next-seo"
import { ProjectSmall } from "../components/ProjectSmall"
import { Layout } from "../layouts"
import { frontMatter as projects } from "./projects/**/*.mdx"

const showcaseProjects = projects
  .map((v) => {
    if (v.order > 0) {
      return v
    }

    return { ...v, order: -1 }
  })
  .sort((a, b) => {
    if (a.order > 0 && b.order > 0) {
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
    <NextSeo
      title="Projects"
      description="Here you can find some of my projects!"
    />
    <Layout title="Projects 🤘">{showcaseProjects}</Layout>
  </>
)
