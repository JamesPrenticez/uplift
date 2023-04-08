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
    bgColor: "red",
    children: <p>Red Button</p>,
  },
};

export const BlueButton: Story = {
  args: {
    name: "Red Button",
    bgColor: "blue",
    children: <p>Blue Button</p>,
  },
};

export const GreenButton: Story = {
  args: {
    name: "Green Button",
    bgColor: "green",
    children: <p>Green Button</p>,
  },
};

export const CustomButton: Story = {
  args: {
    name: "OnClick",
    className: "bg-purple-500/20 hover:bg-purple-500/80 hover:text-white text-purple-900",
    children: <p>Custom Button</p>,
  },
};