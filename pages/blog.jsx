import { Text } from "@chakra-ui/core"
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
      <Text as="p" fontSize="xl" width mt={3} textAlign="center">
        This is going to be my blog, as of now there are 0 posts.
      </Text>
    </Layout>
  </>
)
