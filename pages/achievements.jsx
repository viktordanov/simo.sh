import { Box, css } from "@chakra-ui/core"
import { Global } from "@emotion/core"
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
    <Box key={a.title}>
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
      <Global
        styles={css`
          .masonry-column {
            padding-left: 2rem; // TODO: Figure out why this isn't applied and remove the temporary margin-left below
          }
          .masonry-column > div {
            margin-bottom: 2rem;
            margin-left: 2rem;
          }
        `}
      />
      <Main py="3rem" px="2rem">
        <Masonry
          breakpointCols={2}
          className="masonry-grid"
          columnClassName="masonry-column"
          style={{ display: "flex", marginLeft: "-2rem", width: "auto" }} // TODO: Consider a better way to apply those styles
        >
          {showcaseAchievements}
        </Masonry>
      </Main>
    </Layout>
  </>
)
