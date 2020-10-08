import { Box, Button, Flex, SimpleGrid } from "@chakra-ui/core"
import NextLink from "next/link"
import React from "react"
import Masonry from "react-masonry-css"
import { Achievement } from "../components/Achievement"
import { Card } from "../components/Card"
import { Hero } from "../components/Hero"
import { Main } from "../components/Main"
import { ProjectCard } from "../components/ProjectCard"
import { Skill } from "../components/Skill"
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
  <Box key={a.title} marginBottom="2rem">
    <Achievement {...a} />
  </Box>
))

const showcaseSkills = introSkills.map((s) => (
  <Box key={s.name}>
    <Skill {...s} />
  </Box>
))

const Bio = () => (
  <>
    <MDXComponents.h1>Hi! I'm Simo 👋</MDXComponents.h1>
    <MDXComponents.p>
      I'm just an 18 year old boy that likes to code, play video games, listen
      to music and watch anime.
    </MDXComponents.p>
    <MDXComponents.p>
      I'm in the 12th grade of "MG Baba Tonka" in Ruse, Bulgaria.
    </MDXComponents.p>
    <MDXComponents.p>
      I've been coding since I was in the 4th grade, but have been much more
      involved since 2018.
    </MDXComponents.p>
    <MDXComponents.p>
      I'm primarily a full stack web developer but also branch out in other
      domains too! Some of which include Machine Learning, Image Processing,
      Security, Linux and others.
    </MDXComponents.p>
    <MDXComponents.p>
      My operating system of choice for development is Arch Linux or macOS
      (running a Hackintosh).
    </MDXComponents.p>
    <MDXComponents.p>
      I love contributing to open-source projects. I also really like helping
      people out with coding-related problems.
    </MDXComponents.p>
  </>
)

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
    <Masonry
      breakpointCols={{
        default: 2,
        1400: 2,
        600: 1,
      }}
      className="masonry-grid"
      columnClassName="masonry-column"
      columnAttrs={{ style: { paddingLeft: "2rem" } }}
      style={{
        display: "flex",
        marginLeft: "-2rem",
        padding: "2rem 0",
        width: "auto",
      }}
    >
      {showcaseAchievements}
    </Masonry>
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
