import React from 'react'
import Hero from '../components/Hero'
import FeatureDestination from '../components/FeatureDestination'
import ExclusiveOferrs from '../components/ExclusiveOferrs'
import Testimonial from '../components/Testimonial'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <>
        <Hero/>
        <FeatureDestination/>
        <ExclusiveOferrs/>
        <Testimonial/>
        <NewsLetter/>
    </>
  )
}

export default Home