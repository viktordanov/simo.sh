import { Box, Button, Flex, IconButton, useColorMode } from "@chakra-ui/core"
import styled from "@emotion/styled"
import NextLink from "next/link"
import React from "react"

// https://github.com/leerob/leerob.io/blob/b061aac7bdedd51dd511adb751483ef47c18b0e6/components/Container.js#L8
const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(50px);
  transition: background-color 0.1 ease-in-out;
`

export const Container = (props) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bgColor = { light: "gray.50", dark: "gray.900" }
  const color = { light: "black", dark: "white" }
  const navBgColor = {
    light: "rgba(255, 255, 255, 0.8)",
    dark: "rgba(23, 25, 35, 0.8)",
  }
  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
      >
        <StickyNav
          flexDirection="row"
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
          <Box>
            <NextLink href="/" passHref>
              <Button as="a" variant="ghost" p={[1, 4]}>
                Home
              </Button>
            </NextLink>
            <NextLink href="/projects" passHref>
              <Button as="a" variant="ghost" p={[1, 4]}>
                Projects
              </Button>
            </NextLink>
            <NextLink href="/achievements" passHref>
              <Button as="a" variant="ghost" p={[1, 4]}>
                Achievements
              </Button>
            </NextLink>
            <NextLink href="/blog" passHref>
              <Button as="a" variant="ghost" p={[1, 4]}>
                Blog
              </Button>
            </NextLink>
          </Box>
        </StickyNav>
        {props.children}
      </Flex>
    </>
  )
}
