import styles from './ContactForm.module.css'

const ContactForm = () => {
  return (
    <div className={`container ${styles.contactForm}`} id="contact-form">
      <form action="https://formsubmit.co/67b878952ac3adbcf29a17b4be7941c1" method="POST">
        <div className={`${styles.formControl}`}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <input type="hidden" name="_next" value="https://stackshot.ng" />
        <div className={`${styles.formControl}`}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className={`${styles.formControl}`}>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </div>
        <button className="btn">Send Message</button>
      </form>
    </div>
  )
}

export default ContactForm
