import type { NavigationProps } from '@/components/atoms/Navigation/Navigation.types'
import Link from 'next/link'
import styles from './Navigation.module.css'

const Navigation = (props: NavigationProps) => {
  const { items, ...restProps } = props
  return (
    <nav {...restProps}>
      <ul className={styles.container}>
        {items.map(({ label, href, icon }, index) => (
          <li
            key={index}
            className={styles.item}
          >
            <Link
              href={href}
              className={styles.link}
            >
              <span className={styles.icon}>{icon}</span>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
