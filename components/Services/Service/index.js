import Image from 'next/image'
import styles from './Service.module.css'

const Service = ({ title, description, image }) => {
  return (
    <div className={`flex ${styles.service}`}>
      <div className={styles.serviceText}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.serviceImage}>
        <Image src={image} width={671} height={480} />
      </div>
    </div>
  )
}

export default Service
