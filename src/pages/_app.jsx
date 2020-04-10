import React from "react"
import NextApp from "next/app"
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core"
import { MDXProvider } from "@mdx-js/react"
import theme from "../theme"
import MDXComponents from "../mdx-components"

class App extends NextApp {
  render() {
    const { Component } = this.props
    return (
      <MDXProvider components={MDXComponents}>
        <ThemeProvider theme={theme}>
          <CSSReset />
          <ColorModeProvider>
            <Component />
          </ColorModeProvider>
        </ThemeProvider>
      </MDXProvider>
    )
  }
}

export default App
