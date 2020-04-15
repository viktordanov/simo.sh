const title = "Simo Aleksandrov – Web and Mobile Developer"
const description = "Passionate full stack developer"

const SEO = {
  title,
  description,
  canonical: "https://simo.sh",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://simo.sh",
    title,
    description,
    images: [
      {
        url: "https://simo.sh/dp-scrot.jpg",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: "@fr3fou",
    site: "@fr3fou",
    cardType: "summary_large_image",
  },
}

export default SEO
