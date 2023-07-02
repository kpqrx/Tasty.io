export type DetailedListItemType = {
  imageSrc: string
  imageWidth: number
  imageHeight: number
  label: string
  value: string
}

export interface DetailedListProps {
  items: DetailedListItemType[]
}
