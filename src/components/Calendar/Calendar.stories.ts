import type { Meta, StoryObj } from "@storybook/react";

import Calendar from ".";
const meta = {
  title: "Components/Calendar",
  component: Calendar,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Calendar",
  },
};
