import { Heading, Text } from "@chakra-ui/core"

const MDXComponents = {
  h1: (props) => <Heading size="2xl" mb="1rem" {...props} />,
  h2: (props) => <Heading size="xl" mb="1rem" {...props} />,
  h3: (props) => <Heading size="lg" mb="1rem" {...props} />,
  h4: (props) => <Heading size="md" mb="1rem" {...props} />,
  h5: (props) => <Heading size="sm" mb="1rem" {...props} />,
  h6: (props) => <Heading size="xs" mb="1rem" {...props} />,
  p: (props) => <Text as="p" fontSize="xl" width {...props} />,
}

export default MDXComponents
