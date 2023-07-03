import RecipeThumbnail from './RecipeThumbnail'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof RecipeThumbnail> = {
  component: RecipeThumbnail,
  args: {
    label: 'Spaghetti aglio e olio',
    imageSrc:
      'https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg?auto=compress&cs=tinysrgb&w=330&h=220&dpr=2',
    id: 123,
  },
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof RecipeThumbnail>

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
}
export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
}
export const WithAction: Story = {
  args: {
    variant: 'secondary',
    actionCallback: () => alert('Action'),
    actionName: 'Action',
  },
}
