import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoSection from '../components/VideoSection'
import { Grid, Typography } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import styles from '../styles'

const IndexPage = ({ classes }) => (
  <Layout>
    <SEO title="Home" keywords={[`abs`, `workout`, `abs beginners`, `abs advanced`]} />
    <div className='sector'>
      <Typography className='sectorTitle' variant='h4' align='center'>beginners</Typography>
    </div>
    <Grid container spacing={16} alignContent='center' className='grid'>
      <VideoSection src="https://www.youtube.com/embed/sANj9NtQp0M"/>
      <VideoSection src="https://www.youtube.com/embed/9qiywV82stA"/>
      <VideoSection src="https://www.youtube.com/embed/c-MUOkLZrNY"/>
    </Grid>
    <div className='sector'>
      <Typography className='sectorTitle' variant='h4' align='center'>advanced</Typography>
    </div>
    <Grid container spacing={24} alignContent='center' className='grid'>
      <VideoSection src="https://www.youtube.com/embed/tpu89p7q0po"/>
      <VideoSection src="https://www.youtube.com/embed/D4BzT0QfWHw"/>
      <VideoSection src="https://www.youtube.com/embed/6o4YAsH-CTI"/>
    </Grid>
  </Layout>
)

export default withStyles(styles)(IndexPage)
