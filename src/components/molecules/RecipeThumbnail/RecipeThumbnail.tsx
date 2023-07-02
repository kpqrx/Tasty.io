import type { RecipeThumbnailProps } from '@/components/molecules/RecipeThumbnail/RecipeThumbnail.types'
import Image from 'next/image'
import Link from 'next/link'
import styles from './RecipeThumbnail.module.css'

const RecipeThumbnail = (props: RecipeThumbnailProps) => {
  const {
    label,
    imageSrc,
    imageWidth,
    imageHeight,
    href,
    variant = 'primary',
    ...restProps
  } = props
  return (
    <Link
      href={href}
      className={`
        ${styles.container} 
        ${variant === 'primary' && styles.containerPrimary} 
        ${variant === 'secondary' && styles.containerSecondary}
      `}
      {...restProps}
    >
      <Image
        src={imageSrc}
        alt={label}
        width={imageWidth}
        height={imageHeight}
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
    </Link>
  )
}

export default RecipeThumbnail
