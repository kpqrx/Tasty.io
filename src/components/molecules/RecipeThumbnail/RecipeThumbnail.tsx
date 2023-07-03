import type { RecipeThumbnailProps } from '@/components/molecules/RecipeThumbnail/RecipeThumbnail.types'
import Link from 'next/link'
import styles from './RecipeThumbnail.module.css'
import Button from '@/components/atoms/Button/Button'

const RecipeThumbnail = (props: RecipeThumbnailProps) => {
  const {
    id,
    label,
    imageSrc,
    variant = 'primary',
    actionCallback,
    actionName,
    ...restProps
  } = props
  return (
    <Link
      href={`/recipes/${id}`}
      className={`
        ${styles.container} 
        ${variant === 'primary' && styles.containerPrimary} 
        ${variant === 'secondary' && styles.containerSecondary}
      `}
      {...restProps}
    >
      <img
        src={imageSrc}
        alt={label}
        className={`
          ${styles.image}
          ${variant === 'secondary' && styles.imageSecondary}
        `}
      />
      <span
        className={`
          ${styles.label}
          ${variant === 'primary' && styles.labelPrimary}
          ${variant === 'secondary' && styles.labelSecondary} 
        `}
      >
        {label}
      </span>
      {/* {actionCallback && actionName && (
        <Button onClick={actionCallback}>{actionName}</Button>
      )} */}
    </Link>
  )
}

export default RecipeThumbnail
