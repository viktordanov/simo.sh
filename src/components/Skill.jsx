import { Flex, Image, Text } from "@chakra-ui/core"

export default ({ name, image }) => (
  <Flex flexDir="column" justifyContent="center" alignItems="center">
    <Image src={image} alt={name} objectFit="contain" />
    <Text fontWeight="bold" fontSize="2xl" mt={5}>
      {name}
    </Text>
  </Flex>
)
