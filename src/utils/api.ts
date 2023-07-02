import axios from 'axios'
import type {
  HeadersType,
  SearchedRecipeType,
  RecipeDetailsType,
} from '@/types'

const instance = axios.create({
  baseURL: 'https://api.spoonacular.com/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
  } as HeadersType,
})

export const fetchRecipesByQuery = async (
  query: string,
): Promise<SearchedRecipeType[]> => {
  const { data } = await instance.get('/recipes/complexSearch', {
    params: {
      query,
    },
  })

  const { results } = data
  return results
}

export const fetchRecipeDetails = async (
  id: number,
): Promise<RecipeDetailsType> => {
  const { data } = await instance.get(`/recipes/${id}/information`)

  return data
}
