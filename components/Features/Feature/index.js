import Image from 'next/image'
import styles from './Feature.module.css'

const Feature = ({ icon, name, description }) => {
  return (
    <div className={styles.feature}>
      <Image src={icon} width={60} height={60} />
      <h4>{name}</h4>
      <p className="small">{description}</p>
    </div>
  )
}

export default Feature
