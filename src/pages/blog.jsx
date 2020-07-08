import { NextSeo } from "next-seo"
import { Layout } from "../layouts/index"

export default () => (
  <>
    <NextSeo
      title="Blog"
      description="Here you can find some of my blog posts!"
    />
    <Layout title="Blog ✏">
      This is going to be my blog, as of now there are 0 posts.
    </Layout>
  </>
)
