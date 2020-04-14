import {
  Badge,
  Box,
  Flex,
  IconButton,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/core"
import NextLink from "next/link"

export const Achievement = ({ title, slug = "", image = "", tags }) => {
  const { colorMode } = useColorMode()
  const bgColor = { light: "gray.50", dark: "gray.900" }

  return (
    <Flex
      rounded={10}
      backgroundColor={bgColor[colorMode]}
      overflow="hidden"
      h="100%"
      flexDir="column"
      boxShadow="0px 4px 30px rgba(0, 0, 0, 0.2)"
    >
      {image != "" ? (
        <Image src={image} alt={title} objectFit="contain" />
      ) : null
      // <Flex justifyContent="center" alignItems="center" size="100%">
      //   <Text>No Image</Text>
      // </Flex>
      }
      <Box flex={2} w="100%" h="100%" />
      <Box p="6">
        <Flex wrap="wrap">
          {tags?.length > 0 &&
            tags.map((t) => (
              <Badge
                rounded="full"
                px={2}
                variantColor="teal"
                key={t}
                m="0.3rem"
              >
                {t}
              </Badge>
            ))}
        </Flex>
        <Flex justifyContent="space-between" flex={1}>
          <Text
            mt="1"
            ml="0.3rem"
            fontWeight="semibold"
            fontSize="2xl"
            lineHeight="tight"
          >
            {title}
          </Text>
          <Flex justifyContent="center">
            {slug != "" && (
              <NextLink href={`achievements/${slug}`}>
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
    </Flex>
  )
}
