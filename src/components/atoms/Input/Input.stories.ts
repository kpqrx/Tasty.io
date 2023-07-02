import Input from "./Input";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  component: Input,
  args: {
    label: "Example input field",
    placeholder: "Placeholder...",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};
