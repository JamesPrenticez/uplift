import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';

import Logo from './Logo';
import Umbrella from '../Umbrella';

// @ts-ignore - TODO - fix
import logoFile from '../../assets/logo.svg';

const image = {
  src: logoFile,
  alt: 'logo',
};

const meta: Meta<typeof Logo> = {
  title: 'Logo',
  component: Logo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithComponent: Story = {
  args: {
    logoText: "Uplift",
    logoImage: <Umbrella width={"25px"} />,
    className: "text-[#ed9c53] text-sm"
  },
};

export const WithImage: Story = {
  args: {
    logoText: "Uplift",
    logoImage: <img src={image.src} alt={image.alt} />,
    className: "text-green-700"
  },
};