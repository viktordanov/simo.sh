import React from "react"
import { Card } from "../components/Card"
import { Hero } from "../components/Hero"
import { Main } from "../components/Main"
import Achievements from "../content/achievements.mdx"
import Bio from "../content/bio.mdx"
import Projects from "../content/projects.mdx"
import Skills from "../content/skills.mdx"

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
