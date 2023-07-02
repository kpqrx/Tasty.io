import type { PropertiesListItemType } from '@/components/atoms/PropertiesList/PropertiesList.types'
import type { DetailedListItemType } from '@/components/molecules/DetailedList/DetailedList.types'

export interface RecipeGridProps {
  name: string
  imageSrc: string
  properties: PropertiesListItemType[]
  steps: string[]
  ingredients: DetailedListItemType[]
}
