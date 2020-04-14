import { Flex, Heading, IconButton, Image } from "@chakra-ui/core"
import { css } from "@emotion/core"
import NextLink from "next/link"
export const ProjectCard = ({ title, slug, image, logo }) => (
  <Flex
    direction="column"
    boxShadow="0px 10px 50px rgba(0, 0, 0, 0.3)"
    rounded={15}
    p={5}
  >
    <Image
      opacity={1}
      src={image}
      rounded={15}
      objectFit="contain"
      objectPosition="50% 100%"
    />
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
)
