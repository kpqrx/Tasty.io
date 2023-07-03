import type { PropsWithChildren, ReactNode } from 'react'

export interface PageHeaderProps extends PropsWithChildren {
  renderButtons?: () => ReactNode
  isBackButtonVisible?: boolean
}
