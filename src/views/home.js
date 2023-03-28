import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Internal Group Executive</title>
        <meta property="og:title" content="Internal Group Executive" />
      </Helmet>
    </div>
  )
}

export default Home
