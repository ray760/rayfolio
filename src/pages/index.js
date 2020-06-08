import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Resume from './docs/Ray-Robertson-Resume-2019.pdf'
//import Image from '../components/image'
// import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <div className="bg">
      <div className="picture">
        <span className="bold-text">ray robertson</span>
        <span className="slim-text">FRONTEND</span>
        <span className="bold-text dev">DEVELOPER</span>
        <div className="links">
          <span className="slim-text">
            <Link to="/about-me/">ABOUT</Link>
          </span>
          <span className="bold-text">
            <a href="https://github.com/ray760?tab=repositories">GITHUB</a>
          </span>
          <span className="slim-text">
            <a href="https://www.linkedin.com/in/rayarobertson">LINKEDIN</a>
          </span>
          <span className="bold-text">
            <a href="mailto:ray760@yahoo.com?Subject=Hey%20Ray%20Let's%20Chat%20Front%20Development">
              EMAIL
            </a>
          </span>
          <span className="slim-text">
            <a href={Resume} download>
              resume
            </a>
          </span>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
