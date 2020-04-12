import { Box, Button, Flex, Text } from "@chakra-ui/core"
import NextLink from "next/link"
import React from "react"
import { Card } from "../components/Card"
import { Hero } from "../components/Hero"
import { Main } from "../components/Main"
import Project from "../components/Project"
import { SectionTitle } from "../components/SectionTitle"
import Bio from "../content/bio.mdx"
import { introAchievements } from "../data/achievements"
import { introProjects } from "../data/projects"

const Index = () => (
  <>
    <Hero title="Simo Aleksandrov" src="me-transparent.png" />
    <Main>
      <Card marginTop={{ base: "0px", md: "-2rem" }}>
        <Bio />
      </Card>
      <Card mt="2rem">
        <SectionTitle>Projects 🤘</SectionTitle>
        <Text as="p" fontSize="xl" width>
          Here are some of my projects! You can click on on them to read more!
        </Text>
        <Flex wrap="wrap" justifyContent="center" alignItems="center">
          {introProjects.map((p) => (
            <Box m={10} flex={1} key={p.name}>
              <Project {...p} />
            </Box>
          ))}
          <Flex flexBasis="100%" justifyContent="center">
            <NextLink href="/projects">
              <Button as="a" size="lg" variant="outline">
                All of my projects here!
              </Button>
            </NextLink>
          </Flex>
        </Flex>
      </Card>
      <Card mt="2rem">
        <SectionTitle>Achievements 🏆</SectionTitle>
        <Text as="p" fontSize="xl" width>
          Some of my achievements are listed here! Click on one to read about
          it!
        </Text>
        <Flex wrap="wrap" justifyContent="center" alignItems="center">
          {introAchievements.map((p) => (
            <Box m={10} flex={1} key={p.name}>
              <Project {...p} />
            </Box>
          ))}
          <Flex flexBasis="100%" justifyContent="center">
            <NextLink href="/achievements">
              <Button as="a" size="lg" variant="outline">
                All of my achievements here!
              </Button>
            </NextLink>
          </Flex>
        </Flex>
      </Card>
    </Main>
  </>
)

export default Index
