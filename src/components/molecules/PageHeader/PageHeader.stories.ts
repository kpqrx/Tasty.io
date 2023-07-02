import PageHeader from './PageHeader'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof PageHeader> = {
  component: PageHeader,
  args: {
    children: 'Page header',
  },
}

export default meta
type Story = StoryObj<typeof PageHeader>

export const Default: Story = {}
export const WithBackButton: Story = {
  args: {
    isBackButtonVisible: true,
  },
}
export const WithSaveRecipeButton: Story = {
  args: {
    isSaveRecipeButtonVisible: true,
  },
}
export const WithShoppingListButton: Story = {
  args: {
    isShoppingListButtonVisible: true,
  },
}
