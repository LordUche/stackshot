import Service from './Service'
import { services } from './utils'
import styles from './Services.module.css'

const Services = () => {
  return (
    <section className={`container ${styles.services}`}>
      {services.map((service) => (
        <Service key={service.id} {...service} />
      ))}
    </section>
  )
}

export default Services
