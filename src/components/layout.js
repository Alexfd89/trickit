import React from "react"
import withStyles from '@material-ui/core/styles/withStyles'
import styles from '../styles'
import { AppBar, Toolbar, Slide } from '@material-ui/core'
import logo from '../images/logo.png'
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


const Layout = ({ children }) => (
  <div>
    <div>
      <AppBar position="static" style={{ background: '#000000' }} >
        <Toolbar>
          <div style={{ flexGrow: 1 }}>
            <img src={logo} alt='trickit logo' style={{ maxWidth: '200px', padding: '5px 0' }} />
          </div>
          <Slide direction='left' in={true}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <a href="mailto:denislitose@gmail.com">
                <IoIosMail style={{ fontSize: '40px', color: 'grey' }} />
              </a>
              <a href="https://www.facebook.com/denis.safronov.35">
                <FaFacebook style={{ fontSize: '29px', color: 'grey', margin: '0 10px' }} />
              </a>
              <a href="https://www.youtube.com/channel/UC_eJD_8L87rz-Oe_6tyY3Vg">
                <TiSocialYoutubeCircular style={{ fontSize: '39px', color: 'grey' }} />
              </a>
            </div>
          </Slide>
        </Toolbar>
      </AppBar>
    </div>
    <div
      style={{
        margin: `0 auto`,
        padding: `24px`,
      }}
    >
      <main>{children}</main>
    </div>
    <footer style={{ background: '#212121', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5px 0' }}>
      <a href="mailto:denislitose@gmail.com">
        <IoIosMail style={{ fontSize: '40px', color: 'grey' }} />
      </a>
      <a href="https://www.facebook.com/denis.safronov.35">
        <FaFacebook style={{ fontSize: '29px', color: 'grey', margin: '0 10px' }} />
      </a>
      <a href="https://www.youtube.com/channel/UC_eJD_8L87rz-Oe_6tyY3Vg">
        <TiSocialYoutubeCircular style={{ fontSize: '39px', color: 'grey' }} />
      </a>
    </footer>
  </div>
)

export default withStyles(styles)(Layout)
