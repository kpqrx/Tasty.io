import type { PropsWithChildren } from 'react'
import styles from './Button.module.css'

const Button = (props: PropsWithChildren) => {
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
