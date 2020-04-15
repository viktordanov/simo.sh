import { Box, Button, Flex, SimpleGrid } from "@chakra-ui/core"
import NextLink from "next/link"
import React from "react"
import { Achievement } from "../components/Achievement"
import { Card } from "../components/Card"
import { Hero } from "../components/Hero"
import { Main } from "../components/Main"
import { ProjectCard } from "../components/ProjectCard"
import { Skill } from "../components/Skill"
import Bio from "../content/bio.mdx"
import { introSkills } from "../data/skills"
import MDXComponents from "../mdx-components"
import { frontMatter as achievements } from "../pages/achievements/**/*.mdx"
import { frontMatter as projects } from "../pages/projects/**/*.mdx"

const Index = () => (
  <>
    <Hero title="Simo Aleksandrov" src="me-transparent.png" />
    <Main pb="2rem">
      <Card marginTop={{ base: "0px", md: "-2rem" }}>
        <Bio />
      </Card>
      <Card mt="2rem">
        <Projects />
      </Card>
      <Card mt="2rem">
        <Achievements />
      </Card>
      <Card mt="2rem">
        <Skills />
      </Card>
    </Main>
  </>
)

const showcaseArray = (arr) =>
  arr.filter((a) => a.showcase).sort((a, b) => a.order - b.order)

const showcaseProjects = showcaseArray(projects).map((p) => (
  <Box key={p.title}>
    <ProjectCard {...p} />
  </Box>
))

const showcaseAchievements = showcaseArray(achievements).map((a) => (
  <Box key={a.title}>
    <Achievement {...a} />
  </Box>
))

const showcaseSkills = introSkills.map((s) => (
  <Box key={s.name}>
    <Skill {...s} />
  </Box>
))

const Showcase = ({ title, paragraph, children }) => (
  <>
    <MDXComponents.h1>{title}</MDXComponents.h1>
    <MDXComponents.p>{paragraph}</MDXComponents.p>
    <Flex wrap="wrap" mt={7} justifyContent="center" alignItems="stretch">
      {children}
    </Flex>
  </>
)

const Achievements = () => (
  <Showcase
    title="Achievements 🏆"
    paragraph="Some of my achievements are listed here! Click on one to read about it!"
  >
    <SimpleGrid minChildWidth="15rem" spacing={5} my={5}>
      {showcaseAchievements}
    </SimpleGrid>
    <Flex flexBasis="100%" justifyContent="center">
      <NextLink href="/achievements">
        <Button size="lg" variant="outline">
          All of my achievements here!
        </Button>
      </NextLink>
    </Flex>
  </Showcase>
)

const Projects = () => (
  <Showcase
    title="Projects 🤘"
    paragraph="Here are some of my projects! You can click on on them to read more!"
  >
    <SimpleGrid minChildWidth="14rem" spacing={5} my={5}>
      {showcaseProjects}
    </SimpleGrid>
    <Flex flexBasis="100%" justifyContent="center">
      <NextLink href="/projects">
        <Button size="lg" variant="outline">
          All of my projects here!
        </Button>
      </NextLink>
    </Flex>
  </Showcase>
)

const Skills = () => (
  <Showcase
    title="Skills 📚"
    paragraph="Here's a list of skills / languages that I know."
  >
    <SimpleGrid minChildWidth="10rem" spacing={5} my={5}>
      {showcaseSkills}
    </SimpleGrid>
  </Showcase>
)

export default Index
