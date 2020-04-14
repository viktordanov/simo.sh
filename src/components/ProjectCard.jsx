import { Flex, Heading, IconButton, Image, useColorMode } from "@chakra-ui/core"
import { css } from "@emotion/core"
import NextLink from "next/link"
export const ProjectCard = ({ title, slug, image, logo }) => {
  const { colorMode } = useColorMode()
  const bgColor = { light: "gray.50", dark: "gray.900" }

  return (
    <Flex
      direction="column"
      boxShadow="0px 4px 30px rgba(0, 0, 0, 0.2)"
      backgroundColor={bgColor[colorMode]}
      rounded={15}
      h="100%"
      p={5}
    >
      <Image opacity={1} src={image} w="100%" rounded={15} />
      <Flex justifyContent="center" alignItems="center" className="logo-flex">
        <Image
          src={logo}
          objectFit="contain"
          size={85}
          className="logo"
          mt={-12}
          css={css`
            &:hover {
              transform: scale(1.1);
            }
          `}
          transition="all 0.25s ease-in-out"
        />
      </Flex>
      <Flex
        h="100%"
        flexDirection="column"
        justifyContent="center"
        align="center"
      >
        <Heading mt={2} textAlign="center">
          {title}
        </Heading>
        <Flex justifyContent="center">
          {slug != "" && (
            <NextLink href={`projects/${slug}`}>
              <IconButton
                icon="info-outline"
                size="lg"
                variant="ghost"
                aria-label="Go to project"
              />
            </NextLink>
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}
