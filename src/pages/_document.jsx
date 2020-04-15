import Document, { Head, Main, NextScript } from "next/document"
import React from "react"

const GA_TRACKING_ID = "UA-119885780-2"

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link href="/favicon.ico" rel="shortcut icon" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}');
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
