import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';

import MenuItem from './MenuItem';

const CustomLink = (): React.ReactElement => {
  return (
    <a href="/about" target="_blank" rel="noopener noreferrer">
      A Tag
    </a>
  );
};

const meta: Meta<typeof MenuItem> = {
  title: 'MenuItem',
  component: MenuItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    to:"/",
    children: <p>Default</p>,
  },
};

export const ActivePage: Story = {
  args: {
    to:"/iframe.html",
    children: <p>Active Page</p>,
  },
};

export const HTML: Story = {
  args: {
    to: "/",
    component: "a",
    children: <p>HTML a tag</p>,
  },
};

export const Component: Story = {
  args: {
    to: "/custom",
    children: <p>Custom Component</p>,
    component: CustomLink
  },
};

export const ExternalLink: Story = {
  args: {
    to:"https://example.com",
    children: <p>External Link</p>,
  },
};


