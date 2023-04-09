import type { Meta, StoryObj } from '@storybook/react';

import Hamburger from './Hamburger';

const meta: Meta<typeof Hamburger> = {
  title: 'Hamburger',
  component: Hamburger,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Deafult: Story = {
  args: {},
};