import { Badge, Box, Flex, Image, Text } from "@chakra-ui/core"

export default ({ name, images, tags }) => (
  <Box maxW="sm" borderWidth="1px" rounded={10} overflow="hidden" h="100%">
    <Image src={images[0]} alt={name} objectFit="cover" />
    <Box p="6">
      <Flex wrap="wrap">
        {tags.map((t) => (
          <Badge rounded="full" px={2} variantColor="teal" key={t} m="0.3rem">
            {t}
          </Badge>
        ))}
      </Flex>
      <Text
        mt="1"
        ml="0.3rem"
        fontWeight="semibold"
        fontSize="2xl"
        lineHeight="tight"
        isTruncated
      >
        {name}
      </Text>
    </Box>
  </Box>
)
