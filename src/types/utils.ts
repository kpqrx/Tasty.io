import type { HeadersDefaults } from 'axios'

export type HeadersType = HeadersDefaults & {
  'Content-Type': string
  Accept: string
  'x-api-key': string
}

export type SearchedRecipeType = {
  id: number
  title: string
  image: string
}

export type RecipeDetailsType = {
  readyInMinutes: number
  servings: number
  diaryFree: boolean
  glutenFree: boolean
  vegan: boolean
  vegetarian: boolean
  title: string
  image: string
  extendedIngredients: {
    nameClean: string
    image: string
    amount: number
    unit: string
  }[]
  analyzedInstructions: {
    steps: {
      number: number
      step: string
    }[]
  }[]
}
