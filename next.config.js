const withMdxEnhanced = require("next-mdx-enhanced")({
  layoutPath: "mdx-layouts",
  defaultLayout: true,
})
const withOptimizedImages = require("next-optimized-images")

module.exports = withMdxEnhanced(withOptimizedImages())
