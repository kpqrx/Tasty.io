import DetailedList from './DetailedList'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof DetailedList> = {
  component: DetailedList,
  args: {
    items: Array(4).fill({
      imageSrc:
        'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=82&h=36&dpr=2',
      imageWidth: 82,
      imageHeight: 36,
      label: 'Eggs',
      value: '3 pcs',
    }),
  },
}

export default meta
type Story = StoryObj<typeof DetailedList>

export const Default: Story = {}
