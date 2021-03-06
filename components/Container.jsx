import { Button, Flex, IconButton, useColorMode } from "@chakra-ui/core"
import styled from "@emotion/styled"
import NextLink from "next/link"
import React from "react"

// https://github.com/leerob/leerob.io/blob/b061aac7bdedd51dd511adb751483ef47c18b0e6/components/Container.js#L8
const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: blur(1rem);
  padding: 1rem 2rem;
  transition: background-color 0.1s cubic-bezier(0.4, 0, 0.2, 1);
`

export const Container = (props) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bgColor = { light: "gray.50", dark: "gray.900" }
  const color = { light: "black", dark: "white" }
  const navBgColor = {
    light: "rgba(247, 250, 252, 0.8)",
    dark: "rgba(23, 25, 35, 0.8)",
  }
  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        bg={bgColor[colorMode]}
        minH="100vh"
        w="100%"
        color={color[colorMode]}
      >
        <StickyNav
          flexDir={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          bg={navBgColor[colorMode]}
          as="nav"
          p={8}
          mx="auto"
        >
          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === "dark" ? "sun" : "moon"}
            onClick={toggleColorMode}
          />
          <Flex
            mt={{ base: "1rem", md: 0 }}
            justifyContent="center"
            wrap="wrap"
          >
            <NextLink href="/" passHref>
              <Button as="a" variant="ghost" p={[1, 4]} mr={2}>
                Home
              </Button>
            </NextLink>
            <NextLink href="/projects" passHref>
              <Button as="a" variant="ghost" p={[1, 4]} mr={2}>
                Projects
              </Button>
            </NextLink>
            <NextLink href="/achievements" passHref>
              <Button as="a" variant="ghost" p={[1, 4]} mr={2}>
                Achievements
              </Button>
            </NextLink>
            <NextLink href="/all-posts" passHref>
              <Button as="a" variant="ghost" p={[1, 4]} mr={2}>
                All Posts
              </Button>
            </NextLink>
            <NextLink href="/social" passHref>
              <Button as="a" variant="ghost" p={[1, 4]} mr={2}>
                Social
              </Button>
            </NextLink>
          </Flex>
        </StickyNav>
        {props.children}
      </Flex>
    </>
  )
}
