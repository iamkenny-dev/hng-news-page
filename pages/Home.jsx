import React from 'react'
import LandingPage from '../sections/LandingPage'
import Maine from '../sections/Maine'
import Footer from '../sections/Footer'

const Home = () => {
  return (
    <div className='home'>
        <LandingPage />
        <Maine />
        <Footer />
    </div>
  )
}

export default Home