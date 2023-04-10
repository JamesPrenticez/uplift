import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';

import Navbar from './Navbar';
import {brandName, pages} from  '../../constants'
import Logo from '../Logo/Logo';
import Umbrella from '../Umbrella/Umbrella';

const meta: Meta<typeof Navbar> = {
  title: 'Navbar',
  component: Navbar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    logo: <Logo logoText={brandName.toUpperCase()} logoImage={<Umbrella width={"25px"} />} className={"text-[#ed9c53] text-sm"}/>,
    pages: pages
  },
};