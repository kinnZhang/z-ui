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
export const DateRender: Story = {
  args: {
    value: dayjs("2024-03-05"),
    dateRender(date) {
      return <div>日期{date.date()}</div>;
    },
  },
};
export const DateInnerContent: Story = {
  args: {
    value: dayjs("2024-03-05"),
    dateInnerContent(date) {
      return <div>日期{date.date()}</div>;
    },
  },
};
export const Locale: Story = {
  args: {
    value: dayjs("2024-03-05"),
    locale: "en-US",
  },
};
