import { SectionTitle } from "./components/SectionTitle"
import { Text } from "@chakra-ui/core"

const MDXComponents = {
  h1: SectionTitle,
  p: (props) => <Text as="p" fontSize="xl" width {...props} />,
}

export default MDXComponents
