import { Navigation } from '@/components'
import type { SidebarProps } from '@/components/molecules/Sidebar/Sidebar.types'
import styles from './Sidebar.module.css'

const Sidebar = (props: SidebarProps) => {
  const { navigationItems, ...restProps } = props
  return (
    <aside
      className={styles.container}
      {...restProps}
    >
      <h1 className={styles.logo}>🍴 Tasty.io</h1>
      <Navigation items={navigationItems} />
      <footer className={styles.footer}>
        {new Date().getFullYear()} &copy; Tasty.io
      </footer>
    </aside>
  )
}

export default Sidebar
