const mdxPrism = require("mdx-prism")
const withMdxEnhanced = require("next-mdx-enhanced")({
  layoutPath: "mdx-layouts",
  defaultLayout: true,
  rehypePlugins: [mdxPrism],
})
const withOptimizedImages = require("next-optimized-images")

module.exports = withMdxEnhanced(withOptimizedImages())
