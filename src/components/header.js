import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import youtubeIcon from '../images/youtube.svg'

class Header extends Component {
    render() {
        return (
            <div>
                <AppBar position="static" style={{ background: '#212121' }} >
                    <Toolbar>
                        <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
                            TRICKIT
                        </Typography>
                        {/* <a href="https://www.youtube.com/channel/UC_eJD_8L87rz-Oe_6tyY3Vg">
                            <img style={{ width: '100px' }} src={youtubeIcon} alt='youtube Icon' />
                        </a> */}
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Header
