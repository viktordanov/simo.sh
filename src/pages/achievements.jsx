import { Box, SimpleGrid } from "@chakra-ui/core"
import { NextSeo } from "next-seo"
import { Achievement } from "../components/Achievement"
import { Main } from "../components/Main"
import { Layout } from "../layouts"
import { frontMatter as achievements } from "./achievements/**/*.mdx"

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
  .map((a) => (
    <Box key={a.title}>
      <Achievement {...a} />
    </Box>
  ))

export default () => (
  <>
    <NextSeo
      title="Achievements"
      description="Here you can find some of my achievements!"
    />
    <Layout title="Achievements 🏆">
      <Main py="3rem" px="2rem">
        <SimpleGrid minChildWidth="15rem" spacing="40px">
          {showcaseAchievements}
        </SimpleGrid>
      </Main>
    </Layout>
  </>
)
