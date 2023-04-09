import type { Meta, StoryObj } from '@storybook/react';

import Cube from './Cube';

const meta: Meta<typeof Cube> = {
  title: 'Cube',
  component: Cube,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 500,
    autoPlay: true,
  },
};