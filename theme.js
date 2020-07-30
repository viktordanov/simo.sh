import { theme as chakraTheme } from "@chakra-ui/core"

const theme = {
  ...chakraTheme,
  fonts: {
    ...chakraTheme.fonts,
    heading: "'Source Sans Pro', monospace",
    body: "'Open Sans', sans-serif",
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
  colors: {
    ...chakraTheme.colors,
    black: "#16161D",
  },
}

export default theme
