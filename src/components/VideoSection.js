import React, { Component } from 'react'
import { Grid } from '@material-ui/core'

export class VideoSection extends Component {
    render() {
        const { src } = this.props;
        return (
            <Grid item lg={6} xs={12} md={6}>
                <div style={{maxWidth: '500px', margin: '0 auto'}}>
                    <iframe
                        width="100%"
                        height="315px"
                        title={src}
                        src={src}
                        frameBorder="0"
                        allowFullScreen
                    />
                </div>
            </Grid>
        )
    }
}

export default VideoSection
