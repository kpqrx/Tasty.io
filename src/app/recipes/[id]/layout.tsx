'use client'

import { PageHeader } from '@/components'
import { useRecipeDetails } from '@/hooks'
import React, { type PropsWithChildren } from 'react'

function RecipeLayout(props: PropsWithChildren & { params: { id: number } }) {
  const { children, params } = props
  const { id } = params
  const { data, isSuccess } = useRecipeDetails(id)

  return (
    <>
      <PageHeader
        isBackButtonVisible
        isSaveRecipeButtonVisible
        isShoppingListButtonVisible
      >
        {isSuccess && data.name}
      </PageHeader>
      {children}
    </>
  )
}

export default RecipeLayout
