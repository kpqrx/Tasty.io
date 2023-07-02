import type { InputProps } from '@/components/atoms/Input/Input.types'
import styles from './Input.module.css'

const Input = (props: InputProps) => {
  const { label, ...restProps } = props
  return (
    <label>
      <span className={styles.label}>{label}</span>
      <input
        className={styles.input}
        {...restProps}
      />
    </label>
  )
}

export default Input
