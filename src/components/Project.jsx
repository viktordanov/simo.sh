import { Image, Flex, Heading, Box } from "@chakra-ui/core"
import { css } from "@emotion/core"
export default ({ name, link, screenshot, logo }) => (
  <Flex direction="column">
    <Image
      css={css`
        transition: all 0.45s ease-in-out;
        &:hover {
          transform: scale(0.95);
        }
        &:hover + .logo-flex > .logo {
          transform: scale(0.95);
          opacity: 0.5;
        }
      `}
      src={screenshot}
      rounded={15}
      boxShadow="0px 10px 50px rgba(0, 0, 0, 0.25)"
    />
    <Flex justifyContent="center" alignItems="center" className="logo-flex">
      <Image
        src={logo}
        size={85}
        className="logo"
        mt={-12}
        css={css`
          transition: all 0.45s ease-in-out;
        `}
      />
    </Flex>
    <Heading mt={2} textAlign="center">
      {name}
    </Heading>
  </Flex>
)
