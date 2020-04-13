import { Heading, Text } from "@chakra-ui/core"

const hs = {
  "2xl": 1,
  xl: 2,
  lg: 3,
  md: 4,
  sm: 5,
  xs: 7,
}

const H = ({ size, children, ...props }) => (
  <Heading size={size} mb="1rem" {...props}>
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
}

export default MDXComponents
