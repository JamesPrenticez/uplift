import React from "react";
import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
// See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const DefaultButton: Story = {
  args: {
    name: "Default",
  },
};

export const RedButton: Story = {
  args: {
    name: "Red Button",
    className: "bg-red-500 text-7xl text-red-900"
  },
};

export const OnClickButton: Story = {
  args: {
    name: "OnClick",
    className: "bg-purple-600 text-purple-700",
    children: <p>Test</p>,
  },
};