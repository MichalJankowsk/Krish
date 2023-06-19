import Head from 'next/head'

import Header from 'components/header'
import ProfileLinks from 'components/profile-links'
import { Hero } from 'sections'

import stl from './Home.module.scss'

const Home = () => (
  <>
    <Head>
      <title>Top Rated UI/UX Designer - Krish4alex</title>
    </Head>
    <div className={stl.wrapper}>
      <Header />
      <ProfileLinks />
      <Hero />
    </div>
  </>
)

export default Home
