import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core"
import { MDXProvider } from "@mdx-js/react"
import { DefaultSeo } from "next-seo"
import NextApp from "next/app"
import React from "react"
import SEO from "../../next-seo.config"
import { Container } from "../components/Container"
import { Footer } from "../components/Footer"
import MDXComponents from "../mdx-components"
import theme from "../theme"

class App extends NextApp {
  render() {
    const { Component } = this.props
    return (
      <MDXProvider components={MDXComponents}>
        <ThemeProvider theme={theme}>
          <CSSReset />
          <ColorModeProvider value="light">
            <Container>
              <DefaultSeo {...SEO} />
              <Component />
            </Container>
            <Footer />
          </ColorModeProvider>
        </ThemeProvider>
      </MDXProvider>
    )
  }
}

export default App
