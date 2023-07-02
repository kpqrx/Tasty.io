import type { PropertiesListProps } from '@/components/atoms/PropertiesList/PropertiesList.types'
import styles from './PropertiesList.module.css'

const PropertiesList = (props: PropertiesListProps) => {
  const { items, ...restProps } = props
  return (
    <nav {...restProps}>
      <ul className={styles.container}>
        {items.map(({ label, value }, index) => (
          <li
            key={index}
            className={styles.item}
          >
            <span className={styles.itemLabel}>{label}</span>
            <span className={styles.itemValue}>
              {typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default PropertiesList
