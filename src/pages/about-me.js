import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <React.Fragment>
    <Link to="/" className="back-btn">
      BACK
    </Link>
    <div className="bg">
      <div className="picture about">
        <p>
          Hi, my name is Ray Robertson and I'm into Front End Dev. Currently, I reside in the "V" in the <a href="https://bit.ly/2GPDb0M">D.M.V</a> but born and raised in Kings County, Brooklyn, NY. I'm a Son, Brother, Husband, and Father of two amazing boys.         
        </p>

        <p>
          I currently work at <a href="https://www.trusted.com">Trusted</a>, where I spend time taking RESTful API data and turning it into Front End, Client-side goodness. I'm a React fan and spend time keeping update to date with new React releases, staying sharp with Redux, create-react-app and working on my <a href="https://github.com/ray760/reactformbuilder">side project</a> where I add and implement new things I've learned. I also listen to some of my favorite industry podcasts like <a href="https://reactpodcast.simplecast.fm/">React Podcast</a>, <a href="https://syntax.fm/">Syntax</a> and <a href="https://frontendhappyhour.com/">Front End Happy Hour.</a>
        </p>

        <p>
          Check out my <a href="https://www.linkedin.com/in/rayarobertson">LinkedIn</a>, <a href="https://github.com/ray760">Github</a> or shot me an Email to discuss any opportunities or anything developer related.
        </p>
      </div>
    </div>
  </React.Fragment>
  // <Layout>
  //   <SEO title="Page two" />
  //   <h1>Hi from the second page</h1>
  //   <p>Welcome to page 2</p>
  //   <Link to="/">Go back to the homepage</Link>
  // </Layout>
)

export default SecondPage
