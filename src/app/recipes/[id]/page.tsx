'use client'

import { RecipeGrid } from '@/components'
import { useRecipeDetails } from '@/hooks'

export default function RecipePage({ params }: { params: { id: number } }) {
  const { id } = params
  const { data, isSuccess, isInitialLoading } = useRecipeDetails(id)
  return (
    <>
      {isInitialLoading && <span>Loading...</span>}
      {isSuccess && <RecipeGrid {...data} />}
    </>
  )
}
