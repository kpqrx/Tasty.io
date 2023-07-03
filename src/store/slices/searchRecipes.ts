import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import type {
  SearchRecipesStoreActionType,
  SearchRecipesStoreStateType,
} from '@/types'

export const useSearchRecipesStore = create(
  persist<SearchRecipesStoreStateType & SearchRecipesStoreActionType>(
    (set) => ({
      searchQuery: '',
      setSearchQuery: (searchQuery) =>
        set((store) => ({ ...store, searchQuery })),
    }),
    { name: 'searchRecipesStore' },
  ),
)
