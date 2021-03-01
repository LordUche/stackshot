import Feature from './Feature'
import styles from './Features.module.css'
import { features } from './utils'

const Features = () => {
  return (
    <section className={`container ${styles.features}`}>
      <h2>Main Features</h2>
      <p>
        Integrate with Stackshot and remove the burden of monitoring payments, verifying beneficiary data and reporting
        transactions.
      </p>
      <div className="flex">
        {features.map((feature) => (
          <Feature key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  )
}

export default Features
