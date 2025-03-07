import React, { useEffect } from 'react'
import Hero from '../components/Homepage/Hero'
import Features from '../components/Homepage/Features'
import Modules from '../components/Homepage/Modules'
import Vouches from '../components/Homepage/Vouches'
import OurTeam from '../components/Homepage/OurTeam'
import Pricing from '../components/Homepage/Pricing'
import Faq from '../components/Homepage/Faq'
import FeaturedBlog from '../components/Homepage/FeaturedBlog'
import { useLocation } from 'react-router-dom'

const HomePage = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1))
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  }, [location])

  return (
    <>
      <div className='w-full max-w-[1600px] mx-auto'>
        <Hero />
        <Features />
        <Modules />
        <Vouches />
        <OurTeam />
        <FeaturedBlog />
        <Pricing />
        <Faq />
      </div>
    </>
  )
}

export default HomePage
