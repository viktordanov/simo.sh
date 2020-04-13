import { Flex, Heading, IconButton, Image } from "@chakra-ui/core"
import { css } from "@emotion/core"
import NextLink from "next/link"
export const ProjectCard = ({ title, slug, image, logo }) => (
  <Flex direction="column">
    <Image
      opacity={0.75}
      transition="all 0.25s ease-in-out"
      css={css`
        &:hover {
          opacity: 1;
        }
        &:hover + .logo-flex > .logo {
          opacity: 0.75;
        }
        filter: drop-shadow(0px 10px 50px rgba(0, 0, 0, 0.4));
      `}
      src={image}
      rounded={15}
    />
    <Flex justifyContent="center" alignItems="center" className="logo-flex">
      <Image
        src={logo}
        size={85}
        opacity={1}
        className="logo"
        mt={-12}
        transition="all 0.25s ease-in-out"
        css={css`
          filter: drop-shadow(0px 10px 50px rgba(0, 0, 0, 0.4));
        `}
      />
    </Flex>
    <Heading mt={2} textAlign="center">
      {title}
    </Heading>
    <Flex justifyContent="center">
      {slug != "" && (
        <NextLink href={slug}>
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
)
