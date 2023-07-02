export type NavigationItemType = {
  label: string
  icon: string
  href: string
}

export interface NavigationProps {
  items: NavigationItemType[]
}
