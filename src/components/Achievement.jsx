import { Badge, Box, Flex, Image, Text } from "@chakra-ui/core"

export default ({ name, images, tags }) => (
  <Box maxW="sm" borderWidth="1px" rounded={10} overflow="hidden">
    <Flex wrap="wrap">
      {images.map((i) => (
        <Image src={i} key={i} alt={name} objectFit="cover" flex="50%" />
      ))}
    </Flex>
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
