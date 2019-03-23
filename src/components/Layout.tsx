import { Box, Grommet } from "grommet"
import { base, dark, grommet } from "grommet/themes"
import React from "react"
import { createGlobalStyle } from "styled-components"
import { connect } from "react-redux"
import { StickyContainer, Sticky } from "react-sticky"

import SiteFooter from "./SiteFooter"
import SiteHeader from "./SiteHeader"
import Sidebar from "./Sidebar"

const GlobalStyle = createGlobalStyle`
  img {
    max-width: 100%;
  }
  body {
    margin: 0;
  }
  a:hover {
    opacity: 0.9;
  }
`

const THEMES = {
  grommet,
  base,
  dark,
}

function themeByThemeType(themeType?: string): string {
  return "grommet"
}

const Theme = ({ children, themeType, themeSwitch }) => (
  <Grommet theme={THEMES[themeByThemeType(themeType)]}>
    <Grommet>
      <GlobalStyle />
      <Box direction="column" align="center">
        <Box width="xlarge">
          <SiteHeader />
          <main>
            <StickyContainer>
              <Box direction="row-responsive">
                <Box basis="large" flex="grow" direction="row-responsive">
                  {children}
                </Box>
                <Box basis="medium">
                  <Sticky>
                    {({ style }) => (
                      <aside style={style}>
                        <Sidebar
                          themeSwitch={themeSwitch}
                          themeType={themeType}
                        />
                      </aside>
                    )}
                  </Sticky>
                </Box>
              </Box>
            </StickyContainer>
          </main>
        </Box>
      </Box>
      <SiteFooter />
    </Grommet>
  </Grommet>
)

const mapStateToProps = ({ themeType }) => {
  return { themeType }
}

const mapDispatchToProps = (dispatch) => {
  return { themeSwitch: () => dispatch({ type: `CHANGE_THEME` }) }
}

const ConnectedTheme = connect(
  mapStateToProps,
  mapDispatchToProps
)(Theme)

export default function Layout({ children }) {
  return <ConnectedTheme>{children}</ConnectedTheme>
}
