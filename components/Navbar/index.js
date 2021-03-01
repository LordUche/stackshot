import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar + ' container'}>
      <div className={styles.logo}>
        <Image src="/images/logo.svg" width={40} height={40} />
        <h2 className={styles.logoText}>StackShot</h2>
      </div>
      <Link href="#contact-form">
        <a className="btn">Contact Us</a>
      </Link>
    </nav>
  )
}

export default Navbar
