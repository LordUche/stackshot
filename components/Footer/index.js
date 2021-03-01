import ContactForm from './ContactForm'
import styles from './Footer.module.css'
import Socials from './Socials'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2>Contact Us</h2>
      <ContactForm />
      <Socials />
    </footer>
  )
}

export default Footer
