// https://leerob.io/blog/nextjs-sitemap-robots
const fs = require("fs")
const globby = require("globby")

;(async () => {
  const pages = await globby([
    "pages/**/*{.js,.jsx,.mdx}",
    "!pages/_*.js",
    "!pages/_*.jsx",
    "!pages/api",
  ])
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((page) => {
    const path = page
      .replace("pages", "")
      .replace(".jsx", "")
      .replace(".js", "")
      .replace(".mdx", "")
    const route = path === "/index" ? "" : path

    return `
<url>
    <loc>${`https://simo.sh${route}`}</loc>
</url>
        `
  })
  .join("")}
</urlset>
    `

  // eslint-disable-next-line no-sync
  fs.writeFileSync("public/sitemap.xml", sitemap)
})()
