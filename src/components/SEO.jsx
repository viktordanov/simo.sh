import { ArticleJsonLd, NextSeo } from "next-seo"
import React from "react"

export const SEO = ({ title, img, tags }) => {
  const image = {
    url: `https://simo.sh/${img}`,
    alt: title,
  }
  return (
    <>
      <NextSeo
        title={title}
        openGraph={{
          type: "article",
          article: {
            tags: tags,
          },
          url,
          title,
          images: [image],
        }}
      />
      <ArticleJsonLd
        authorName="Simo Aleksandrov"
        images={[img]}
        publisherLogo="favicon.ico"
        publisherName="Simo Aleksandrov"
        title={title}
        url={url}
      />
    </>
  )
}
