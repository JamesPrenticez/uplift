import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';

import Tooltip from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

  args: {
    children: <div className='mx-autuo h-64 w-64 bg-green-500 text-white'> Hover me</div>
  },
};

export const CustomText: Story = {
  args: {

    children: <div className='h-64 w-64 bg-red-500 text-white'> Hover me</div>
  },
};

export const TopLeft: Story = {
  args: {
    position: {x: "left", y:"top"},
    children: <div className='h-64 w-64 bg-purple-500 text-white'> Hover me</div>
  },
};

export const TopRight: Story = {
  args: {
    position: {x: "right", y:"top"},
    children: <div className='h-64 w-64 bg-purple-500 text-white'> Hover me</div>
  },
};

export const BottomRight: Story = {
  args: {
    position: {x: "right", y:"bottom"},
    children: <div className='h-64 w-64 bg-purple-500 text-white'> Hover me</div>
  },
};

export const BottomLeft: Story = {
  args: {
    position: {x: "left", y:"bottom"},
    children: <div className='h-64 w-64 bg-purple-500 text-white'> Hover me</div>
  },
};