import Link from 'next/link'
import styles from './Hero.module.css'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className={`flex ${styles.hero}`}>
      <div className={styles.heroText}>
        <h1 className={styles.heroTitle}>Real time Payment Monitor for Global Businesses</h1>
        <p>
          Stackshot helps digital businesses in Africa monitor real time payments, verify banking information and user
          data.
        </p>
        <Link href="#contact-form">
          <a className={`btn ${styles.cta}`}>Contact Us</a>
        </Link>
      </div>
      <div className={styles.heroImg}>
        <Image src="/images/charts.svg" width={797} height={625} />
      </div>
    </div>
  )
}

export default Hero
