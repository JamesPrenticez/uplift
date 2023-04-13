import type { Meta, StoryObj } from '@storybook/react';

import Squircle from './Squircle';
import { SunIcon } from '../Icons';

const meta: Meta<typeof Squircle> = {
  title: 'Squircle',
  component: Squircle,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    bgColor: ""
  },
};

// color: #620042;
// --bg: #ffb8d2;

// color: #44056e;
// --bg: #dac4ff;

// color: #003e6b;
// --bg: #b6e0fe;

// color: #014807;
// --bg: #c1f2c7;