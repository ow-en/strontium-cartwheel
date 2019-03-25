import { Link } from "gatsby"
import { Box, Button, Heading, TextInput } from "grommet"
import { FormSearch } from "grommet-icons"
import * as React from "react"

import siteConfig from "../../site-config"

export default ({ appIcon }, { appName }) => (
  <header>
    <Box
      tag="header"
      direction="row"
      background="brand"
      align="center"
      elevation="medium"
      justify="between"
      responsive={false}
      style={{ position: "relative" }}
    >
      <Button>
        <Box
          flex={false}
          direction="row"
          align="center"
          margin={{ left: "small" }}
        >
          {appIcon}
          <Heading level="4" margin={{ left: "small", vertical: "none" }}>
            {appName}
          </Heading>
        </Box>
      </Button>

      <Box direction="row" align="center">
        <Box
          margin={{ left: "medium" }}
          round="xsmall"
          background={{ color: "white", opacity: "weak" }}
          direction="row"
          align="center"
          pad={{ horizontal: "small" }}
        />
        <FormSearch color="#7D4CDB" />
        <TextInput plain placeholder="Search" type="search" />
      </Box>
    </Box>
  </header>
)
