import React from "react"
import { withTheme } from "emotion-theming"
import { Link as ChakraLink, Icon, Text, Image } from "@chakra-ui/core"

import { SectionTitle } from "../components/SectionTitle"
import { Hero } from "../components/Hero"
import { Container } from "../components/Container"
import { Main } from "../components/Main"
import { DarkModeSwitch } from "../components/DarkModeSwitch"
import { Footer } from "../components/Footer"

const Index = () => (
  <Container>
    <Hero title="Simo Aleksandrov" />
    <Main>
      <SectionTitle>Hi! I'm Simo 👋</SectionTitle>
      <Text fontSize="xl" width>
        I'm just an 18 year old boy that likes to code, play video games, listen
        to music and watch anime. I'm in the 11th grade of "MG Baba Tonka" in
        Ruse, Bulgaria. I've been coding since I was in the 4th grade, but have
        been much more involved since 2018. I'm primarily a full stack web
        developer but also branch out in other domains too! Some of which
        include Machine Learning, Image Processing, Security, Linux and others.
        My operating system of choice for devleopment is Arch Linux or macOS
        (Hackintosh). I love contributing to open-source projects. I also really
        like helping people out with coding-related problems.
      </Text>
    </Main>
    <DarkModeSwitch />
    <Footer>
      <Text>Simo Aleksandrov 2020</Text>
    </Footer>
  </Container>
)

export default withTheme(Index)
