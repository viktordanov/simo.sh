import { NextSeo } from "next-seo"
import React from "react"

export const SEO = ({
  title,
  img = "og.png",
  tags,
  desc: description = "",
}) => {
  const image = {
    url: `https://simo.sh/${img}`,
    alt: title,
  }
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          type: "article",
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
