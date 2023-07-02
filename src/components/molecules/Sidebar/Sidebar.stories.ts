import Sidebar from './Sidebar'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  args: {
    navigationItems: [
      { label: 'Navigation item 1', icon: '🍑', href: '#' },
      { label: 'Navigation item 2', icon: '🥔', href: '#' },
      { label: 'Navigation item 3', icon: '🍅', href: '#' },
    ],
  },
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Sidebar>

export const Default: Story = {}
