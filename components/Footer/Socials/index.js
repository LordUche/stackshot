import styles from './Socials.module.css'
import Image from 'next/image'

const Socials = () => {
  return (
    <div className={`container ${styles.socials}`}>
      <div className={styles.logo}>
        <Image src="/images/footer-logo.svg" width={30} height={30} />
        <h2 className={styles.logoText}>StackShot</h2>
      </div>
      <div className={styles.icons}>
        <div className={styles.icon}>
          <Image className={styles.icon} src={'/images/Facebook.svg'} width={10} height={20} />
        </div>
        <div className={styles.icon}>
          <Image className={styles.icon} src={'/images/Twitter.svg'} width={25} height={20} />
        </div>
        <div className={styles.icon}>
          <Image className={styles.icon} src={'/images/Instagram.svg'} width={21} height={20} />
        </div>
      </div>
    </div>
  )
}

export default Socials
