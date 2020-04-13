import { Box, Button, Flex } from "@chakra-ui/core"
import NextLink from "next/link"
import React from "react"
import { Achievement } from "../components/Achievement"
import { Card } from "../components/Card"
import { Hero } from "../components/Hero"
import { Main } from "../components/Main"
import { ProjectCard } from "../components/ProjectCard"
import Bio from "../content/bio.mdx"
import Skills from "../content/skills.mdx"
import MDXComponents from "../mdx-components"
import { frontMatter as achievements } from "../pages/achievements/**/*.mdx"
import { frontMatter as projects } from "../pages/projects/**/*.mdx"

const showcase = (arr) =>
  arr.filter((a) => a.showcase).sort((a, b) => a.order - b.order)

const showcaseProjects = showcase(projects).map((a) => {
  return (
    <Box m={10} key={a.title} flex={1}>
      <ProjectCard {...a} />
    </Box>
  )
})

const showcaseAchievements = showcase(achievements).map((a) => {
  let link = a.__resourcePath.replace("achievements/", "").replace(".mdx", "")
  return (
    <Box m={3} key={a.title} flex={1}>
      <Achievement {...a} link={link} />
    </Box>
  )
})

const Showcase = ({ title, paragraph, children }) => (
  <>
    <MDXComponents.h1>{title}</MDXComponents.h1>
    <MDXComponents.p>{paragraph}</MDXComponents.p>
    {children}
  </>
)

const Achievements = () => (
  <Showcase
    title="Achievements 🏆"
    paragraph="Some of my achievements are listed here! Click on one to read about it!"
  >
    <Flex wrap="wrap" mt={7} justifyContent="center" alignItems="center">
      {showcaseAchievements}
      <Flex flexBasis="100%" justifyContent="center" mt={5}>
        <NextLink href="/achievements">
          <Button size="lg" variant="outline">
            All of my achievements here!
          </Button>
        </NextLink>
      </Flex>
    </Flex>
  </Showcase>
)

const Projects = () => (
  <Showcase
    title="Projects 🤘"
    paragraph="Here are some of my projects! You can click on on them to read more!"
  >
    <Flex wrap="wrap" justifyContent="center" alignItems="center">
      {showcaseProjects}
      <Flex flexBasis="100%" justifyContent="center">
        <NextLink href="/projects">
          <Button size="lg" variant="outline">
            All of my projects here!
          </Button>
        </NextLink>
      </Flex>
    </Flex>
  </Showcase>
)

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

export default Index
