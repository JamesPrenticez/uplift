import type { Meta, StoryObj } from '@storybook/react';

import Umbrella from './Umbrella';

const meta: Meta<typeof Umbrella> = {
  title: 'Umbrella',
  component: Umbrella,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: "50"
  },
};