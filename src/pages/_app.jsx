import { ColorModeProvider, CSSReset, ThemeProvider } from "@chakra-ui/core"
import { MDXProvider } from "@mdx-js/react"
import NextApp from "next/app"
import React from "react"
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
          <ColorModeProvider>
            <Container>
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
