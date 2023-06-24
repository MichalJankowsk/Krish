import Layout from 'layout'
import { Hero, About, Services, Skills, Projects, Testimonial } from 'sections'

const Home = () => (
  <Layout>
    <Hero />
    <About />
    <Services />
    <Skills />
    <Projects />
    <Testimonial />
  </Layout>
)

export default Home
