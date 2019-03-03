import React, { Component } from 'react'
import { Typography, Grid } from '@material-ui/core'

export class VideoSection extends Component {
    render() {
        const { title, src } = this.props
        return (
            <Grid item lg={6} xs={12} md={6}>
                <div style={{maxWidth: '500px', margin: '0 auto'}}>
                <Typography variant='h6' style={{ color: '#eeeeee', margin: '0 auto' }}>
                    {title}
                </Typography>
                    <iframe
                        width="100%"
                        height="315"
                        src={src}
                        frameBorder="0"
                        allowFullScreen
                    >
                    </iframe>
                </div>
            </Grid>
        )
    }
}

export default VideoSection
