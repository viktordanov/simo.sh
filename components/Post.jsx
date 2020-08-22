import { Badge, Box, Flex, IconButton, PseudoBox, Text } from "@chakra-ui/core"
import NextLink from "next/link"

export const Post = ({ title, slug, baseDir, tags, short }) => {
  return (
    <PseudoBox
      transition="all 0.25s ease-in-out"
      p={4}
      rounded={15}
      _hover={{
        boxShadow: "0px 10px 50px rgba(0, 0, 0, 0.25)",
      }}
      boxShadow="0px 8px 30px rgba(0, 0, 0, 0.1)"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={1}>
              {title}
            </Text>
            <Flex wrap="wrap">
              {tags?.length > 0 &&
                tags.map((t) => (
                  <Badge
                    rounded="full"
                    variantColor="yellow"
                    key={t}
                    px="0.4rem"
                    mr={1}
                    my={[1, 0]}
                  >
                    {t}
                  </Badge>
                ))}
            </Flex>
            {short && (
              <Text mt={1} fontSize="xl">
                {short}
              </Text>
            )}
          </Box>
        </Flex>
        <NextLink href={`${baseDir}/${slug}`}>
          <IconButton
            justifySelf="end"
            icon="chevron-right"
            size="lg"
            variant="ghost"
            aria-label="Go to Post"
          />
        </NextLink>
      </Flex>
    </PseudoBox>
  )
}
