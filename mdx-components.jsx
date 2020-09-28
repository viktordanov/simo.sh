import {
  Box,
  Code,
  Heading,
  Image,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/core"
import { css } from "@emotion/core"
import NextLink from "next/link"

// https://github.com/leerob/leerob.io/blob/master/components/MDXComponents.js
// https://github.com/chakra-ui/chakra-ui/tree/master/packages/chakra-ui-docs/components/MDXComponents.js

const hs = {
  "2xl": 1,
  xl: 2,
  lg: 3,
  md: 4,
  sm: 5,
  xs: 7,
}

const CustomHeading = ({ size, children, as, ...props }) => (
  <Heading size={size} my="1rem" as={as} {...props}>
    <Text textAlign="center" fontWeight="100" d="inline" color="gray.500">
      {"#".repeat(hs[size]) + " "}
    </Text>
    {children}
  </Heading>
)

const CustomLink = (props) => {
  const { colorMode } = useColorMode()
  const color = {
    light: "hsl(208, 99%, 44%)",
    dark: "hsl(208, 95%, 68%)",
  }

  const href = props.href
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"))

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link color={color[colorMode]} {...props} overflowWrap="break-word" />
      </NextLink>
    )
  }

  return (
    <Link
      color={color[colorMode]}
      isExternal
      {...props}
      overflowWrap="break-word"
    />
  )
}

const MDXComponents = {
  h1: (props) => <CustomHeading size="2xl" as="h1" {...props} />,
  h2: (props) => <CustomHeading size="xl" as="h2" {...props} />,
  h3: (props) => <CustomHeading size="lg" as="h3" {...props} />,
  h4: (props) => <CustomHeading size="md" as="h4" {...props} />,
  h5: (props) => <CustomHeading size="sm" as="h5" {...props} />,
  h6: (props) => <CustomHeading size="xs" as="h6" {...props} />,
  p: (props) => <Text as="p" fontSize="xl" width {...props} mt={3} />,
  inlineCode: (props) => (
    <Code variantColor="yellow" fontSize="0.84em" {...props} />
  ),
  img: (props) => (
    <Image
      rounded={15}
      w="100%"
      my="2rem"
      css={css`
        filter: drop-shadow(0px 10px 50px rgba(0, 0, 0, 0.3));
      `}
      {...props}
    />
  ),
  ul: (props) => <Box as="ul" pt={1} pl={4} ml={2} {...props} />,
  ol: (props) => <Box as="ol" pt={1} pl={4} ml={2} {...props} />,
  li: (props) => <Box as="li" pb={1} {...props} />,
  a: CustomLink,
}

export default MDXComponents
