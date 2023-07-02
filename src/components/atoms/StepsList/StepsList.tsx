import type { StepsListProps } from '@/components/atoms/StepsList/StepsList.types'
import styles from './StepsList.module.css'

const StepsList = (props: StepsListProps) => {
  const { items, ...restProps } = props
  return (
    <nav {...restProps}>
      <ol className={styles.container}>
        {items.map((step, index) => (
          <li
            key={index}
            className={styles.item}
          >
            <span className={styles.itemNumber}>{++index}</span>
            <span className={styles.itemContent}>{step}</span>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default StepsList
