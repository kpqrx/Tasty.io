import type { PropsWithChildren } from 'react'

export interface PageHeaderProps extends PropsWithChildren {
  isBackButtonVisible?: boolean
  isSaveRecipeButtonVisible?: boolean
  isShoppingListButtonVisible?: boolean
}
