import { SEO } from "../components/SEO"
import { Layout } from "../layouts/index"

export default () => (
  <>
    <SEO
      title="Blog"
      description="Here you can find some of my blog posts!"
      cannonical="https://simo.sh/blog"
    />
    <Layout title="Blog ✏">
      This is going to be my blog, as of now there are 0 posts.
    </Layout>
  </>
)
