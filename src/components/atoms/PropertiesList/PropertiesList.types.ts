export type PropertiesListItemType = {
  label: string
  value: number | boolean
}

export interface PropertiesListProps {
  items: PropertiesListItemType[]
}
