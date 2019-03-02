import React from "react"
import withStyles from '@material-ui/core/styles/withStyles'
import styles from '../styles'
import Header from "./Header"


const Layout = ({ children }) => (
  <div>
    <Header />
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
