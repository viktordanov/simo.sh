const mdxPrism = require("mdx-prism")
const withMdxEnhanced = require("next-mdx-enhanced")({
  layoutPath: "mdx-layouts",
  defaultLayout: true,
  rehypePlugins: [mdxPrism],
})
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

module.exports = withMdxEnhanced(withBundleAnalyzer())
