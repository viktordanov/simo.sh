const rehypePrism = require("@mapbox/rehype-prism")
const withMdxEnhanced = require("next-mdx-enhanced")({
  layoutPath: "mdx-layouts",
  defaultLayout: true,
  rehypePlugins: [rehypePrism],
})
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

module.exports = withMdxEnhanced(
  withBundleAnalyzer({
    webpack(config, { isServer }) {
      if (isServer) {
        require("./scripts/gen-sitemap")
      }
      return config
    },
  })
)
