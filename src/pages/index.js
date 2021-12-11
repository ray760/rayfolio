import React from 'react'
import { Link } from 'gatsby'

import RFVideo from '../components/RFVideo'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faReply } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/layout'
import Resume from '../docs/Ray-Robertson-Resume-2021.pdf'
//import Image from '../components/image'
// import SEO from '../components/seo'

library.add(faHome, faReply)

const IndexPage = () => (
  <Layout>
    <main className="rf-container">
      <div className="content">
        <span className="bold-text">ray robertson</span>
        <span className="slim-text">FRONTEND</span>
        <span className="bold-text dev">DEVELOPER</span>
        <div className="links">
          <span className="slim-text">
            <Link className="update" to="/about-me/">
              ABOUT
            </Link>
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
            <a className="here" href={Resume} download>
              resume
            </a>
          </span>
        </div>
      </div>
      <RFVideo />
    </main>
  </Layout>
)

export default IndexPage
