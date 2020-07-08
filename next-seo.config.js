const title = "Simo Aleksandrov!"
const description =
  "Passionate Software Engineer, JavaScript, React and Go Developer, Post-Rock Lover, Rhythm Game Fanatic."

const SEO = {
  title,
  titleTemplate: "%s | simo.sh",
  description,
  canonical: "https://simo.sh",
  openGraph: {
    type: "website",
    url: "https://simo.sh",
    title,
    description,
    images: [
      {
        url: "https://simo.sh/og.png",
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
