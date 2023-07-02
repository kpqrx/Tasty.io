import type { DetailedListProps } from '@/components/molecules/DetailedList/DetailedList.types'
import styles from './DetailedList.module.css'

const DetailedList = (props: DetailedListProps) => {
  const { items, ...restProps } = props
  return (
    <nav {...restProps}>
      <ul className={styles.container}>
        {items.map(({ imageSrc, label, value }, index) => (
          <li
            key={index}
            className={styles.item}
          >
            <img
              className={styles.itemImage}
              alt={label}
              src={imageSrc}
            />
            <div className={styles.itemDetails}>
              <span className={styles.itemLabel}>{label}</span>
              <span className={styles.itemValue}>{value}</span>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default DetailedList
