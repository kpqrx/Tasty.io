export interface RecipeThumbnailProps {
  imageSrc: string
  label: string
  id: number
  variant?: 'primary' | 'secondary'
  actionCallback?: () => void
  actionName?: string
}
