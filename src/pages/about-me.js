import React from 'react'
import { Link } from 'gatsby'
import RFVideo from '../components/RFVideo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from '../components/layout'
// import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <Link className="back-btn update" to="/">
      <FontAwesomeIcon icon="reply" />
      &nbsp; Back
    </Link>
    <main className="rf-container">
      <div className="content about">
        <p>
          Hi, my name is Ray Robertson and I'm into Front End Dev. Currently, I
          reside in the "V" in the{' '}
          <a className="link" href="https://bit.ly/2GPDb0M">
            D.M.V
          </a>{' '}
          but was born and raised in Kings County, Brooklyn, NY. I'm a Son,
          Brother, Husband, and Father of two amazing boys.
        </p>
        <p>
          I currently work at{' '}
          <a className="link" href="https://www.saic.com">
            SAIC
          </a>{' '}
          (Science Applications International Corporation), where I spend time
          taking RESTful API data and turning it into Front End, Client-side
          goodness. I'm a React fan and spend time staying updated with new
          React releases, staying sharp with Redux, create-react-app, and
          working on side projects where I add and implement new things I've
          learned. I also listen to some of my favorite industry podcasts like{' '}
          <a className="link" href="https://reactpodcast.simplecast.com/">
            React Podcast
          </a>
          ,{' '}
          <a className="link" href="https://syntax.fm/">
            Syntax
          </a>
          , and{' '}
          <a className="link" href="https://www.frontendhappyhour.com/">
            Front End Happy Hour
          </a>
          .
        </p>
        <p>
          Check out my{' '}
          <a className="link" href="https://www.linkedin.com/in/rayarobertson">
            LinkedIn
          </a>
          ,{' '}
          <a className="link" href="https://github.com/ray760">
            Github
          </a>{' '}
          or shoot me an{' '}
          <a
            className="link"
            href="mailto:ray760@yahoo.com?Subject=Hey%20Ray%20Let's%20Chat%20Front%20Development"
          >
            emails
          </a>{' '}
          to discuss any opportunities or anything developer-related.
        </p>
      </div>
      <RFVideo />
    </main>
  </Layout>
)

export default SecondPage
