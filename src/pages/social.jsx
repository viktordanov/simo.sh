import { Box, Flex, Link } from "@chakra-ui/core"
import {
  FaGithub,
  FaSteam,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"
import { MdMail } from "react-icons/md"
import { Layout } from "../layouts"

export default () => (
  <Layout title="Social 📱">
    <Flex justifyContent="center" alignItems="center" wrap="wrap">
      <Flex
        flexDirection="column"
        justify="center"
        align="center"
        m={5}
        transition="all 0.2s ease-in-out"
      >
        <Link href="https://twitter.com/fr3fou">
          <Box as={FaTwitter} size="5rem" />
        </Link>
      </Flex>
      <Flex
        flexDirection="column"
        justify="center"
        align="center"
        m={5}
        transition="all 0.2s ease-in-out"
      >
        <Link href="https://github.com/fr3fou">
          <Box as={FaGithub} size="5rem" />
        </Link>
      </Flex>
      <Flex
        flexDirection="column"
        justify="center"
        align="center"
        m={5}
        transition="all 0.2s ease-in-out"
      >
        <Link href="https://twitch.tv/fr3fou">
          <Box as={FaTwitch} size="5rem" />
        </Link>
      </Flex>
      <Flex
        flexDirection="column"
        justify="center"
        align="center"
        m={5}
        transition="all 0.2s ease-in-out"
      >
        <Link href="https://steamcommunity.com/id/fr3fou">
          <Box as={FaSteam} size="5rem" />
        </Link>
      </Flex>
      <Flex
        flexDirection="column"
        justify="center"
        align="center"
        m={5}
        transition="all 0.2s ease-in-out"
      >
        <Link href="https://www.youtube.com/channel/UCXudfqkZnDPm8Kg8gijrAlA">
          <Box as={FaYoutube} size="5rem" />
        </Link>
      </Flex>
      <Flex
        flexDirection="column"
        justify="center"
        align="center"
        m={5}
        transition="all 0.2s ease-in-out"
      >
        <Link href="mailto:me@simo.sh">
          <Box as={MdMail} size="5rem" />
        </Link>
      </Flex>
    </Flex>
  </Layout>
)
