import { Box, Button, Flex, Text } from "@chakra-ui/core"
import NextLink from "next/link"
import React from "react"
import { Card } from "../components/Card"
import { Hero } from "../components/Hero"
import { Main } from "../components/Main"
import Project from "../components/Project"
import { SectionTitle } from "../components/SectionTitle"
import Bio from "../content/bio.mdx"
import projects from "../data/projects"

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
          Here you can find some of my projects, you can click on them to read
          more!
        </Text>
        <Flex wrap="wrap" justifyContent="center">
          {projects.map((p) => (
            <Box m={10} flex={1}>
              <Project {...p} />
            </Box>
          ))}
          <Flex flexBasis="100%" justifyContent="center">
            <NextLink href="/projects">
              <Button as="a" size="lg">
                All of my projects here!
              </Button>
              {/* <ChakraLink fontWeight="bold">here </ChakraLink> */}
            </NextLink>
          </Flex>
          {/* ... and others, click{" "} */}
          {/* to explore more of my proejcts! */}
        </Flex>
      </Card>
    </Main>
  </>
)

export default Index
