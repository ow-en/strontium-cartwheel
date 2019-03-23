import { Box, Markdown, Text } from "grommet"
import * as React from "react"

export default () => (
  <footer>
    <Box pad="large" align="center">
      <Text color="text">
        <Markdown>Footer Text</Markdown>
      </Text>
    </Box>
  </footer>
)
