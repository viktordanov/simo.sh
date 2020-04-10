import React from "react"
import { withTheme } from "emotion-theming"
import { Link as ChakraLink, Icon, Text } from "@chakra-ui/core"

import { Hero } from "../components/Hero"
import { Container } from "../components/Container"
import { Main } from "../components/Main"
import { DarkModeSwitch } from "../components/DarkModeSwitch"
import { Footer } from "../components/Footer"

const Index = () => (
  <Container>
    <Hero title="Simo Aleksandrov." />
    <Main>
      <Text>This is my portfolio</Text>
      <Text>This is my portfolio</Text>
      <Text>This is my portfolio</Text>
      <Text>This is my portfolio</Text>
      <Text>This is my portfolio</Text>
      <Text>This is my portfolio</Text>
      <Text>This is my portfolio</Text>
      <Text>This is my portfolio</Text>
      <Text>This is my portfolio</Text>
      <Text>This is my portfolio</Text>
      <Text>This is my portfolio</Text>
      <Text>This is my portfolio</Text>
    </Main>
    <DarkModeSwitch />
    <Footer>
      <Text>Simo Aleksandrov 2020</Text>
    </Footer>
  </Container>
)

export default withTheme(Index)
