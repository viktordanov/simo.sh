import { ArticleJsonLd, NextSeo } from "next-seo"
import React from "react"

export const SEO = ({ title, url, img, tags }) => {
  const image = {
    url: `https://simos.sh${img}`,
    alt: title,
  }
  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
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
