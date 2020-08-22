import { Box, Heading } from "@chakra-ui/core"
import { Main } from "../components/Main"
import { SEO } from "../components/SEO"
import { Layout } from "../layouts/index"
import { frontMatter as achievements } from "./achievements/**/*.mdx"
import { frontMatter as randomPosts } from "./blog/**/*.mdx"
import { frontMatter as projects } from "./projects/**/*.mdx"

const showcaserRandomPosts = randomPosts
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
  .map((p) => <Box key={p.title}>{p.title}</Box>)

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
  .map((p) => <Box key={p.title}>{p.title}</Box>)

const showcaseAchievements = achievements
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
  .map((a) => <Box key={a.title}>{a.title}</Box>)

const Posts = () => (
  <>
    <SEO
      title="Posts"
      description="Here you can find all of my posts!"
      cannonical="https://simo.sh/posts"
    />
    <Layout title="Posts ✏">
      <Main py="3rem">
        <Box>
          <Heading>Random</Heading>
        </Box>
        <Box>
          <Heading>Achievements</Heading>
          {showcaseAchievements}
        </Box>
        <Box>
          <Heading>Projects</Heading>
          {showcaseProjects}
        </Box>
      </Main>
    </Layout>
  </>
)

export default Posts
