import Link from 'next/link'
import ContactForm from './ContactForm'
import styles from './Footer.module.css'
import Socials from './Socials'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2>Contact Us</h2>
      <ContactForm />
      <Socials />
      <div className={`flex container ${styles.copyright}`}>
        <Link href="/">
          <a>API Documentation</a>
        </Link>
        <p>© Stackshot Platform Limited {new Date().getFullYear()}. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
