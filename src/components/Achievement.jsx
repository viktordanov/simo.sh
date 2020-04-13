import { Badge, Box, Flex, IconButton, Image, Text } from "@chakra-ui/core"
import NextLink from "next/link"

export const Achievement = ({ name, link, images, tags }) => (
  <Box borderWidth="1px" rounded={10} overflow="hidden" h="100%">
    <Image src={images[0]} alt={name} objectFit="contain" />
    <Box p="6">
      <Flex wrap="wrap">
        {tags.map((t) => (
          <Badge rounded="full" px={2} variantColor="teal" key={t} m="0.3rem">
            {t}
          </Badge>
        ))}
      </Flex>
      <Flex justifyContent="space-between">
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
        <Flex justifyContent="center">
          {link != "" && (
            <NextLink href={link}>
              <IconButton
                ml={1}
                icon="chevron-right"
                size="lg"
                variant="ghost"
                aria-label="Go to project"
              />
            </NextLink>
          )}
        </Flex>
      </Flex>
    </Box>
  </Box>
)
