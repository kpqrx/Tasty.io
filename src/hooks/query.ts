'use client'

import {
  fetchRecipeDetails,
  fetchRecipesByQuery,
  transformRecipeDetailsData,
  transformRecipesByQueryData,
} from '@/utils'
import { useQuery } from '@tanstack/react-query'

export const useRecipesByQuery = (searchQuery: string) => {
  const query = useQuery(
    ['searchRecipes', searchQuery],
    () => fetchRecipesByQuery(searchQuery),
    {
      enabled: searchQuery.length > 2,
      select: transformRecipesByQueryData,
    },
  )
  return query
}

export const useRecipeDetails = (recipeId: number) => {
  const query = useQuery(
    ['recipeDetails', recipeId],
    () => fetchRecipeDetails(recipeId),
    {
      select: transformRecipeDetailsData,
    },
  )
  return query
}
