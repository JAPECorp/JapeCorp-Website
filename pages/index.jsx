import Clients from '../components/Clients/Clients'
import Footer from '../components/Footer/footer'
import Hero from '../components/Hero/hero'
import Meta from '../components/meta/meta'

export default function Home() {
  return (
    <>
      <Meta title="JAPECorp" />
      <Hero id="home" />

      <Clients />
      <Footer />

    </>
  )
}
