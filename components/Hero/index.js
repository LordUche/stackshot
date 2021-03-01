import styles from './Hero.module.css'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className={`flex ${styles.hero}`}>
      <div className={styles.heroText}>
        <h1 className={styles.heroTitle}>Real-time Payment Monitor</h1>
        <p>Now, you can monitor your payment real-time, and double-check all the information.</p>
        <a className="btn">Contact Us</a>
      </div>
      <div className={styles.heroImg}>
        <Image src="/images/charts.svg" width={797} height={625} />
      </div>
    </div>
  )
}

export default Hero
