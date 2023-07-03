import styles from './Button.module.css'
import type { ButtonProps } from './Button.types'

const Button = (props: ButtonProps) => {
  const { children, ...restProps } = props
  return (
    <button
      className={styles.container}
      {...restProps}
    >
      {children}
    </button>
  )
}

export default Button
