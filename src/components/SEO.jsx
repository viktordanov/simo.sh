import { NextSeo } from "next-seo"
import React from "react"

export const SEO = ({
  title,
  img = "og.png",
  tags,
  description,
  cannonical = "https://simo.sh",
}) => {
  const image = {
    url: `https://simo.sh/${img}`,
    alt: title,
  }
  return (
    <>
      <NextSeo
        title={title}
        canonical={cannonical}
        description={description ?? description}
        openGraph={{
          type: "article",
          url: cannonical,
          article: {
            tags: tags,
          },
          description: description,
          title: `${title} | simo.sh`,
          images: [image],
        }}
      />
    </>
  )
}
