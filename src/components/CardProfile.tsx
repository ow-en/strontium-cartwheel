import { Box, Button, Image, Markdown, Text } from "grommet"
import { Github, Reddit, Twitter } from "grommet-icons"
import * as React from "react"

export default () => (
  <div>
    <Box
      round="small"
      pad="medium"
      margin="small"
      border={true}
      wrap={true}
      overflow="hidden"
    >
      <Box direction="row-responsive">
        <Box
          margin={{ bottom: "small", left: "none", right: "small" }}
          round="small"
          height="xsmall"
          width="xsmall"
          overflow="hidden"
        />
        <Box>
          <Text weight="bold" size="large" color="text">
            Author
          </Text>
        </Box>
      </Box>
      <Box direction="row" wrap={true}>
        <Button
          href={`https://twitter.com/`}
          icon={<Twitter size="medium" />}
        />
        <Button href={`https://github.com/`} icon={<Github size="medium" />} />

        <Button
          href={`https://reddit.com/user/`}
          icon={<Reddit size="medium" />}
        />
      </Box>
      <Box overflow="hidden">
        <Text size="small" color="text">
          <Markdown>Author Bio</Markdown>
        </Text>
      </Box>
    </Box>
  </div>
)
