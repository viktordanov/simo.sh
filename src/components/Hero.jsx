import { Flex, Heading } from "@chakra-ui/core"

export const Hero = ({ title }) => {
  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Heading fontSize="5vw">{title}</Heading>
    </Flex>
  )
}

Hero.defaultProps = {
  title: "with-chakra-ui",
}
