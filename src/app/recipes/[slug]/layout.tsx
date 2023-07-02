'use client'

import { PageHeader } from '@/components'
import React, { type PropsWithChildren } from 'react'

function RecipeLayout(props: PropsWithChildren) {
  const { children } = props
  return (
    <>
      <PageHeader
        isBackButtonVisible
        isSaveRecipeButtonVisible
        isShoppingListButtonVisible
      >
        Meal name
      </PageHeader>
      {children}
    </>
  )
}

export default RecipeLayout
