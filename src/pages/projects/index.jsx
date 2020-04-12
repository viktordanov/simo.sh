import { Card } from "../../components/Card"
import { Hero } from "../../components/Hero"
import { Main } from "../../components/Main"
import { SectionTitle } from "../../components/SectionTitle"

export default () => {
  return (
    <>
      <Hero title="Projects" height="31rem" />
      <Main>
        <Card marginTop={{ base: "0px", md: "-2rem" }}>
          <SectionTitle>Projects 🤘</SectionTitle>
        </Card>
      </Main>
    </>
  )
}
