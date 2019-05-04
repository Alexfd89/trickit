import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo1"
import VideoSection from '../components/VideoSection'
import { Grid, Typography } from '@material-ui/core'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`trickit`, `abs`, `workout`, `abs beginners`, `abs advanced`]} />
    <div className='sector'>
      <Typography className='sectorTitle' variant='h4' style={{ color: 'lightgrey' }} align='center'>beginners</Typography>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0', padding: '5px' }}>
      <Typography align='center' style={{ color: 'lightgrey', maxWidth: '600px' }}>
        TrickiT Workout has created a series of training for beginners. It consists of 3-levels. This series will help you get into the workout tone. Exercises are selected so that you will be involved all groups of abdominal muscles. While training on this complex of training, you will see that you will rather quickly lose belly fat, 6 packs will begin to appear and you will have a flat and beautiful stomach.
      </Typography>
    </div>
    <Grid container spacing={16} alignContent='center' className='grid'>
      <VideoSection src="https://www.youtube.com/embed/-ul1b6SEnAM" />
    </Grid>
    <div className='sector'>
      <Typography className='sectorTitle' variant='h4' style={{ color: 'lightgrey' }} align='center'>advanced</Typography>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0', padding: '5px' }}>
      <Typography align='center' style={{ color: 'lightgrey', maxWidth: '600px' }}>
        This training is more suitable for people who are already at a more advanced level of swinging the press. It consists of more difficult exercises, we picked them up so that they involve all groups of abdominal muscles. By training in this technique, you will see how your ABS will acquire a more beautiful shape and your six packs will be even more visible. As well as this training will prepare you for the next level.
      </Typography>
    </div>
    <Grid container spacing={24} alignContent='center' className='grid'>
      <VideoSection src="https://www.youtube.com/embed/kxSIn-E-KT4" />
    </Grid>
    <div className='sector'>
      <Typography className='sectorTitle' variant='h4' style={{ color: 'lightgrey' }} align='center'>plank</Typography>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0', padding: '5px' }}>
      <Typography align='center' style={{ color: 'lightgrey', maxWidth: '600px' }}>
        Plank is one of the best exercises for  your ABS, as well as for the back, shoulder girdle and buttocks. This exercise will help you achieve a flat stomach, burn belly fat and emphasize your 6 Pack. TrickiT has perfectly developed exercises and workout time for level-3, which is ideal for people with good physical training. We believe in achieving perfect results. You should always surprise your body with new exercises and we promise to provide them for you.
      </Typography>
    </div>
    <Grid container spacing={24} alignContent='center' className='grid'>
      <VideoSection src="https://www.youtube.com/embed/WOmL7GzGZUk" />
      <VideoSection src="https://www.youtube.com/embed/ixNDA2mReXo" />
      <VideoSection src="https://www.youtube.com/embed/MNKKxUwporg" />
    </Grid>
    <div>
      <div class="g-ytsubscribe" data-channelid="UCYQ9fTqUFNRmuSrXYHMHhZw" data-layout="full" data-theme="dark" data-count="hidden"></div>
    </div>
  </Layout>
)

export default IndexPage
