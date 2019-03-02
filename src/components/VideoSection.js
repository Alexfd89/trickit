import React, { Component } from 'react'
import { Typography } from '@material-ui/core'

export class VideoSection extends Component {
    render() {
        const { title, src, side } = this.props
        return (
            <div style={{ width: '100%', margin: '60px auto', display: 'flex', flexDirection: side === 'left' ? 'row' : 'row-reverse', justifyContent: 'space-between'}}>
                <Typography variant='h6' style={{ color: '#eeeeee' }}>
                    {title}
                </Typography>
                <div style={{ margin: '0 auto' }}>
                    <iframe
                        width="560"
                        height="315"
                        src={src}
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    >
                    </iframe>
                </div>
            </div>
        )
    }
}

export default VideoSection
