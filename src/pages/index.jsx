import { Box, Button, Flex } from "@chakra-ui/core"
import NextLink from "next/link"
import React from "react"
import { Achievement } from "../components/Achievement"
import { Card } from "../components/Card"
import { Hero } from "../components/Hero"
import { Main } from "../components/Main"
import Bio from "../content/bio.mdx"
import Projects from "../content/projects.mdx"
import Skills from "../content/skills.mdx"
import MDXComponents from "../mdx-components"
import { frontMatter as achievements } from "../pages/achievements/**/*.mdx"

const showcaseAchievements = achievements
  .filter((a) => a.showcase)
  .sort((a, b) => a.order - b.order)
  .map((a) => {
    let link = a.__resourcePath.replace("achievements/", "").replace(".mdx", "")
    return (
      <Box m={3} key={a.title} flex={1}>
        <Achievement {...a} link={link} />
      </Box>
    )
  })

const Achievements = () => {
  return (
    <>
      <MDXComponents.h1>Achievements 🏆</MDXComponents.h1>
      <MDXComponents.p>
        Some of my achievements are listed here! Click on one to read about it!
      </MDXComponents.p>
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
    </>
  )
}

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
