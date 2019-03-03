import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoSection from '../components/VideoSection'
import { Grid } from '@material-ui/core'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Grid container spacing={24}  alignContent='center'>
      <VideoSection
        title='ABS workout 6 pack level-1'
        src="https://www.youtube.com/embed/tpu89p7q0po"
      />
      <VideoSection
        title='ABS workout 6 pack level-2'
        src="https://www.youtube.com/embed/D4BzT0QfWHw"
      />
      <VideoSection
        title='ABS workout 6 pack level-3'
        src="https://www.youtube.com/embed/6o4YAsH-CTI"
      />
    </Grid>
  </Layout>
)

export default IndexPage
