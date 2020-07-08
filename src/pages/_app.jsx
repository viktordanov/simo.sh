import {
  ColorModeProvider,
  CSSReset,
  ThemeProvider,
  useColorMode,
} from "@chakra-ui/core"
import { css, Global } from "@emotion/core"
import { MDXProvider } from "@mdx-js/react"
import { DefaultSeo } from "next-seo"
import NextApp from "next/app"
import React from "react"
import SEO from "../../next-seo.config"
import { Container } from "../components/Container"
import { Footer } from "../components/Footer"
import MDXComponents from "../mdx-components"
import { prismDarkTheme, prismLightTheme } from "../prism"
import theme from "../theme"

// https://github.com/leerob/leerob.io/tree/master/pages/_app.js
const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode()

  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          ${colorMode === "light" ? prismLightTheme : prismDarkTheme};
          ::selection {
            background-color: #47a3f3;
            color: #fefefe;
          }
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === "light" ? "white" : "#171923"};
          }
        `}
      />
      {children}
    </>
  )
}

class App extends NextApp {
  render() {
    const { Component } = this.props
    return (
      <MDXProvider components={MDXComponents}>
        <ThemeProvider theme={theme}>
          <ColorModeProvider value="light">
            <Container>
              <DefaultSeo
                {...SEO}
                openGraph={{
                  title: "Simo Aleksandrov!",
                }}
              />
              <GlobalStyle>
                <Component />
              </GlobalStyle>
            </Container>
            <Footer />
          </ColorModeProvider>
        </ThemeProvider>
      </MDXProvider>
    )
  }
}

export default App
