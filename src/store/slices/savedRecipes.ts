import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import type {
  SavedRecipesStoreActionType,
  SavedRecipesStoreStateType,
} from '@/types'

export const useSavedRecipesStore = create(
  persist<SavedRecipesStoreActionType & SavedRecipesStoreStateType>(
    (set) => ({
      savedRecipes: [],
      saveRecipe: (savedRecipe) =>
        set((store) => ({
          ...store,
          savedRecipes: [...store.savedRecipes, savedRecipe],
        })),
      deleteRecipe: (deletedRecipe) =>
        set((store) => ({
          ...store,
          savedRecipes: store.savedRecipes.filter(({ id }) => id !== deletedRecipe),
        })),
    }),
    { name: 'savedRecipesStore' },
  ),
)
