import Navigation from "./Navigation";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Navigation> = {
  component: Navigation,
  args: {
    items: [
      { label: "Navigation item 1", icon: '🍑', href: "#" },
      { label: "Navigation item 2", icon: '🥔', href: "#" },
      { label: "Navigation item 3", icon: '🍅', href: "#" },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Default: Story = {};
