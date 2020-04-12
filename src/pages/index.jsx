import React from "react"
import { Link as ChakraLink, Text, Box, Heading, Flex } from "@chakra-ui/core"

import { Hero } from "../components/Hero"
import { Container } from "../components/Container"
import { SectionTitle } from "../components/SectionTitle"
import { Main } from "../components/Main"
import { DarkModeSwitch } from "../components/DarkModeSwitch"
import { Footer } from "../components/Footer"
import { Card } from "../components/Card"
import Project from "../components/Project"
import projects from "../data/projects"

import Bio from "../content/bio.mdx"

const Index = () => (
  <Container>
    <Hero title="Simo Aleksandrov" />
    <Main>
      <Card marginTop={{ base: "0px", md: "-2rem" }}>
        <Bio />
      </Card>
      <Card mt="2rem">
        <SectionTitle>Projects</SectionTitle>
        <Flex wrap="wrap" justifyContent="center">
          {projects.map((p) => (
            <Box m={10} flex={1}>
              <Project {...p} />
            </Box>
          ))}
        </Flex>
      </Card>
    </Main>
    <DarkModeSwitch />
    <Footer>
      <Text>Simo Aleksandrov 2020</Text>
    </Footer>
  </Container>
)

export default Index
