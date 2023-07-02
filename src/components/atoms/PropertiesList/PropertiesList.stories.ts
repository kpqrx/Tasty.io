import PropertiesList from './PropertiesList'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof PropertiesList> = {
  component: PropertiesList,
  args: {
    items: [
      { label: 'Recipe property 1', value: 'Value 1' },
      { label: 'Recipe property 2', value: 'Value 2' },
      { label: 'Recipe property 3', value: 'Value 3' },
      { label: 'Recipe property 4', value: 'Value 4' },
      { label: 'Recipe property 5', value: 'Value 5' },
      { label: 'Recipe property 6', value: 'Value 6' },
      { label: 'Recipe property 7', value: 'Value 7' },
    ],
  },
}

export default meta
type Story = StoryObj<typeof PropertiesList>

export const Default: Story = {}
