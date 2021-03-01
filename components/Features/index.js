import Feature from './Feature'
import styles from './Features.module.css'
import { features } from './utils'

const Features = () => {
  return (
    <section className={`container ${styles.features}`}>
      <h2>Main Features</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda officia doloremque odio vel. Repellendus
        nulla accusantium eligendi adipisci accusamus? Doloremque facere rem iusto. Autem modi quisquam at enim nihil.
        Animi!
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
