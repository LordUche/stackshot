import Head from 'next/head'
import Image from 'next/image'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>StackShot</title>
        <meta name="description" content="Real-time Payment Monitor" />
        <meta name="keywords" content="payment, investment, gateway, real-time, realtime, africa" />
      </Head>
      <header className={styles.header}>
        <Navbar />
        <Hero />
      </header>
      <Features />
      <Services />
      <Footer />
    </>
  )
}
