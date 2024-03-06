import type { Meta, StoryObj } from "@storybook/react";

import Calendar from ".";
import dayjs from "dayjs";
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
    value: dayjs("2024-03-05"),
  },
};
