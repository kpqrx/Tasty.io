import type { DetailedListProps } from '@/components/molecules/DetailedList/DetailedList.types'
import styles from './DetailedList.module.css'
import Image from 'next/image'

const DetailedList = (props: DetailedListProps) => {
  const { items, ...restProps } = props
  return (
    <nav {...restProps}>
      <ul className={styles.container}>
        {items.map(
          ({ imageSrc, imageWidth, imageHeight, label, value }, index) => (
            <li
              key={index}
              className={styles.item}
            >
              <Image
                className={styles.itemImage}
                alt={label}
                src={imageSrc}
                width={imageWidth}
                height={imageHeight}
              />
              <div className={styles.itemDetails}>
                <span className={styles.itemLabel}>{label}</span>
                <span className={styles.itemValue}>{value}</span>
              </div>
            </li>
          ),
        )}
      </ul>
    </nav>
  )
}

export default DetailedList
