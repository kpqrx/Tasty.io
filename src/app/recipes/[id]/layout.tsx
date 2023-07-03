'use client'

import { PageHeader, Button } from '@/components'
import { useRecipeDetails } from '@/hooks'
import { useSavedRecipesStore } from '@/store'
import React, { type PropsWithChildren } from 'react'

function RecipeLayout(props: PropsWithChildren & { params: { id: number } }) {
  const { children, params } = props
  const { id } = params
  const { data, isSuccess } = useRecipeDetails(id)
  const { saveRecipe, deleteRecipe, savedRecipes } = useSavedRecipesStore()

  const isRecipeSaved = savedRecipes.some(({ id: savedId }) => id === savedId)
  const buttonCallback = () =>
    isRecipeSaved
      ? deleteRecipe(id)
      : saveRecipe({
          id,
          name: data!.name,
          image: data!.imageSrc,
        })
  return (
    <>
      <PageHeader
        isBackButtonVisible
        renderButtons={() =>
          isSuccess && (
            <Button onClick={buttonCallback}>
              {isRecipeSaved ? 'Remove' : 'Save'} recipe
            </Button>
          )
        }
      >
        {isSuccess && data.name}
      </PageHeader>
      {children}
    </>
  )
}

export default RecipeLayout
