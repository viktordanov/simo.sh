import { Avatar, Box, Flex, Image, Text, useColorMode } from "@chakra-ui/core"
import { css } from "@emotion/core"

export const ProjectSmall = ({ name, link, logo = "", short }) => {
  const { colorMode } = useColorMode()
  const color = { light: "black", dark: "white" }

  return (
    <Flex flexDir="row" alignItems="center">
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
        <Text fontSize="2xl" fontWeight="bold">
          {name}
        </Text>
        <Text mt={1} fontSize="xl">
          {short}
        </Text>
      </Box>
    </Flex>
  )
}
