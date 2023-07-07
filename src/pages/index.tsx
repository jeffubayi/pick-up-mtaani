import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'

const HomeHero = dynamic(() => import('../components/home/hero'))
const HomeServices = dynamic(() => import('../components/home/feature'))
const HomePricing = dynamic(() => import('../components/home/popular-courses'))
const HomeNewsLetter = dynamic(() => import('../components/home/newsletter'))
const HomeTestimonial = dynamic(() => import('../components/home/testimonial'))
const HomeAgents = dynamic(() => import('../components/home/mentors'))

const Home: NextPageWithLayout = () => {
  return (
    <React.Fragment>
      <HomeHero />
      <HomeServices />
      <HomeAgents />
      <HomeTestimonial />
      <HomePricing/>
      <HomeNewsLetter />
    </React.Fragment>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
