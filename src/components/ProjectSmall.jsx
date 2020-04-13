import {
  Avatar,
  Badge,
  Box,
  Flex,
  IconButton,
  Image,
  PseudoBox,
  Text,
  useColorMode,
} from "@chakra-ui/core"
import { css } from "@emotion/core"
import NextLink from "next/link"

export const ProjectSmall = ({ name, link = "", tags, logo = "", short }) => {
  const { colorMode } = useColorMode()
  const color = { light: "black", dark: "white" }

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
          {logo != "" ? (
            <Image
              src={logo}
              alt={name}
              mr="1rem"
              w="6rem"
              h="6rem"
              css={css`
                filter: drop-shadow(0px 10px 50px rgba(0, 0, 0, 0.25));
              `}
            />
          ) : (
            <Avatar
              size="xl"
              mr="1rem"
              name={name}
              backgroundColor="#00000000"
              color={color[colorMode]}
              boxShadow="0px 10px 50px rgba(0, 0, 0, 0.25)"
            />
          )}
          <Box>
            <Text fontSize="2xl" fontWeight="bold" mb={1}>
              {name}
            </Text>
            <Flex wrap="wrap">
              {tags.map((t) => (
                <Badge
                  rounded="full"
                  variantColor="purple"
                  key={t}
                  px="0.4rem"
                  mr={1}
                  my={[1, 0]}
                >
                  {t}
                </Badge>
              ))}
            </Flex>
            <Text mt={1} fontSize="xl">
              {short}
            </Text>
          </Box>
        </Flex>
        {link != "" && (
          <NextLink href={link}>
            <IconButton
              justifySelf="end"
              icon="chevron-right"
              size="lg"
              variant="ghost"
              aria-label="Go to project"
            />
          </NextLink>
        )}
      </Flex>
    </PseudoBox>
  )
}
