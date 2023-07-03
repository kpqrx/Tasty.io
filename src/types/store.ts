export type SearchRecipesStoreStateType = {
  searchQuery: string
}

export type SearchRecipesStoreActionType = {
  setSearchQuery: (
    searchQuery: SearchRecipesStoreStateType['searchQuery'],
  ) => void
}

export type SavedRecipesStoreStateType = {
  savedRecipes: {
    id: number
    name: string
    image: string
  }[]
}
export type SavedRecipesStoreActionType = {
  saveRecipe: (recipe: { id: number; name: string; image: string }) => void
  deleteRecipe: (recipeId: number) => void
}
