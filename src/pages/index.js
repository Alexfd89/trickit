import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoSection from '../components/VideoSection'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <VideoSection 
      title='ABS workout 6 pack level-1' 
      src="https://www.youtube.com/embed/tpu89p7q0po"
      side='right'
    />
    <VideoSection 
      title='ABS workout 6 pack level-2' 
      src="https://www.youtube.com/embed/D4BzT0QfWHw"
      side='left'
    />
    <VideoSection 
      title='ABS workout 6 pack level-3' 
      src="https://www.youtube.com/embed/6o4YAsH-CTI"
      side='right'
    />
  </Layout>
)

export default IndexPage
