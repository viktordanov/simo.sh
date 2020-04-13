import { Box, Button, Flex, Text } from "@chakra-ui/core"
import NextLink from "next/link"
import React from "react"
import Achievement from "../components/Achievement"
import { Card } from "../components/Card"
import { Hero } from "../components/Hero"
import { Main } from "../components/Main"
import Project from "../components/Project"
import { SectionTitle } from "../components/SectionTitle"
import Skill from "../components/Skill"
import Bio from "../content/bio.mdx"
import { introAchievements } from "../data/achievements"
import { introProjects } from "../data/projects"
import { introSkills } from "../data/skills"

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
        <Flex wrap="wrap" justifyContent="center" alignItems="center" mt={7}>
          {introAchievements.map((a) => (
            <Box m={3} flex={1} key={a.name}>
              <Achievement {...a} />
            </Box>
          ))}
          <Flex flexBasis="100%" justifyContent="center" mt={5}>
            <NextLink href="/achievements">
              <Button as="a" size="lg" variant="outline">
                All of my achievements here!
              </Button>
            </NextLink>
          </Flex>
        </Flex>
      </Card>
      <Card mt="2rem">
        <SectionTitle>Skills 📚</SectionTitle>
        <Text as="p" fontSize="xl" width>
          Here's a list of skills that I know.
        </Text>
        <Flex wrap="wrap" justifyContent="center" alignItems="center">
          {introSkills.map((s) => (
            <Box m={10} flexBasis={["23%", "25%"]} key={s.name}>
              <Skill {...s} />
            </Box>
          ))}
        </Flex>
      </Card>
    </Main>
  </>
)

export default Index
