import { Box } from "@chakra-ui/core"
import Masonry from "react-masonry-css"
import { Achievement } from "../components/Achievement"
import { Main } from "../components/Main"
import { SEO } from "../components/SEO"
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
    <Box key={a.title} marginBottom="2rem">
      <Achievement {...a} />
    </Box>
  ))

export default () => (
  <>
    <SEO
      title="Achievements"
      description="Here you can find some of my achievements!"
      cannonical="https://simo.sh/achievements"
    />
    <Layout title="Achievements 🏆">
      <Main py="3rem" px="2rem">
        <Masonry
          breakpointCols={{
            default: 2,
            1400: 2,
            600: 1,
          }}
          className="masonry-grid"
          columnClassName="masonry-column"
          columnAttrs={{ style: { paddingLeft: "2rem" } }}
          style={{ display: "flex", marginLeft: "-2rem", width: "auto" }}
        >
          {showcaseAchievements}
        </Masonry>
      </Main>
    </Layout>
  </>
)
