import { Box, Heading, Image, Text } from "@chakra-ui/core"
import { css } from "@emotion/core"

const hs = {
  "2xl": 1,
  xl: 2,
  lg: 3,
  md: 4,
  sm: 5,
  xs: 7,
}

const H = ({ size, children, ...props }) => (
  <Heading size={size} my="1rem" {...props}>
    <Text textAlign="center" fontWeight="100" d="inline" color="gray.500">
      {"#".repeat(hs[size]) + " "}
    </Text>
    {children}
  </Heading>
)

const MDXComponents = {
  h1: (props) => <H size="2xl" {...props} />,
  h2: (props) => <H size="xl" {...props} />,
  h3: (props) => <H size="lg" {...props} />,
  h4: (props) => <H size="md" {...props} />,
  h5: (props) => <H size="sm" {...props} />,
  h6: (props) => <H size="xs" {...props} />,
  p: (props) => <Text as="p" fontSize="xl" width {...props} />,
  img: (props) => (
    <Image
      rounded={15}
      w="100%"
      my="1rem"
      css={css`
        filter: drop-shadow(0px 10px 50px rgba(0, 0, 0, 0.5));
      `}
      {...props}
    />
  ),
  ul: (props) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
  ol: (props) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
  li: (props) => <Box as="li" pb={1} {...props} />,
}

export default MDXComponents
