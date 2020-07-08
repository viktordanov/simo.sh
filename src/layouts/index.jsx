import { Flex, Heading } from "@chakra-ui/core"

export const Layout = ({ title, children }) => (
  <>
    <Heading textAlign="left">{title}</Heading>
    <Flex direction="column" marginY="1rem" justifyContent="center">
      {children}
    </Flex>
  </>
)
