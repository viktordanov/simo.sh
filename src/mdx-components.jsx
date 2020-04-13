import { Text } from "@chakra-ui/core"
import { SectionTitle } from "./components/SectionTitle"

const MDXComponents = {
  h1: SectionTitle,
  p: (props) => <Text as="p" fontSize="xl" width {...props} />,
}

export default MDXComponents
