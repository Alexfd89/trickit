import React from "react"
import withStyles from '@material-ui/core/styles/withStyles'
import styles from '../styles'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Layout = ({ children }) => (
  <div>
    <div>
      <AppBar position="static" style={{ background: '#212121' }} >
        <Toolbar>
          <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
            TRICKIT
                        </Typography>
        </Toolbar>
      </AppBar>
    </div>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `60px`,
      }}
    >
      <main>{children}</main>
    </div>
  </div>
)

export default withStyles(styles)(Layout)
