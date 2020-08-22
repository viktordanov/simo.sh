import { Box, Heading } from "@chakra-ui/core"
import { Main } from "../components/Main"
import { Post } from "../components/Post"
import { SEO } from "../components/SEO"
import { Layout } from "../layouts/index"
import { frontMatter as achievements } from "./achievements/**/*.mdx"
import { frontMatter as projects } from "./projects/**/*.mdx"
import { frontMatter as randomPosts } from "./random/**/*.mdx"

const generatePosts = (baseDir, arr) =>
  arr
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
    .map((v) => (
      <Box m={9} flex={1} key={v.title}>
        <Post
          key={v.title}
          short={v.short}
          tags={v.tags}
          title={v.title}
          slug={v.slug}
          baseDir={baseDir}
        />
      </Box>
    ))

const showcaseRandomPosts = generatePosts("random", randomPosts)
const showcaseProjects = generatePosts("projects", projects)
const showcaseAchievements = generatePosts("achievements", achievements)

const Posts = () => (
  <>
    <SEO
      title="All Posts"
      description="Here you can find all of my posts!"
      cannonical="https://simo.sh/all-posts"
    />
    <Layout title="All Posts ✏">
      <Main py="3rem">
        <Box>
          <Heading>Random</Heading>
          {showcaseRandomPosts}
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
