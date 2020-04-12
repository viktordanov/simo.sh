import {
  ColorModeProvider,
  CSSReset,
  Text,
  ThemeProvider,
} from "@chakra-ui/core"
import { MDXProvider } from "@mdx-js/react"
import NextApp from "next/app"
import React from "react"
import { Container } from "../components/Container"
import { DarkModeSwitch } from "../components/DarkModeSwitch"
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
              <DarkModeSwitch />
              <Footer>
                <Text>Simo Aleksandrov 2020</Text>
              </Footer>
            </Container>
          </ColorModeProvider>
        </ThemeProvider>
      </MDXProvider>
    )
  }
}

export default App
