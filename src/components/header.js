import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'


class Header extends Component {
    render() {
        return (
            <div>
                <AppBar position="static" style={{ background: '#212121' }} >
                    <Toolbar>
                        <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
                            TRICKIT
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Header
