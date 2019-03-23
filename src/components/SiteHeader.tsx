import { Link } from "gatsby"
import { Box, Heading, Text } from "grommet"
import * as React from "react"

export default () => (
  <header>
    <Box margin="small">
      <Link
        style={{
          boxShadow: "none",
          textDecoration: "none",
        }}
        to="/"
      >
        <Heading textAlign="center" color="brand" margin="small">
          Test Heading
        </Heading>
      </Link>
      <Text color="text" textAlign="center">
        Test Description
      </Text>
    </Box>
  </header>
)
