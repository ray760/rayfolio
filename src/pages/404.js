import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="center">
      <h1>OH NO!</h1>
      <p>This page doesn&#39;t exist... the puppy sadness.</p>
    </div>
    <div className="full-bg"></div>
  </Layout>
)

export default NotFoundPage
