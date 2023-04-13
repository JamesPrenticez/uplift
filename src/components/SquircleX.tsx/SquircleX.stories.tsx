import React from "react"
import type { Meta, StoryObj } from '@storybook/react';

import Squircle from './SquircleX';
import { MoonIcon, SunIcon } from '../Icons';

const meta: Meta<typeof Squircle> = {
  title: 'SquircleX',
  component: Squircle,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: 50,
    height: 50,
    roundness: 1,
    bgColor: "#c1f2c7",
    className: "flex items-center justify-center p-2",
    children: <p className="text-[#014807]">hi</p>
  },
};

export const Rectangle: Story = {
  args: {
    width: 200,
    height: 100,
    roundness: 0.35,
    bgColor: "#b6e0fe",
    className: "flex items-center justify-center p-2",
    children: <p className="text-[#003e6b]">hi</p>
  },
};

export const BreakingAllRules: Story = {
  args: {
    width: 200,
    height: 100,
    roundness: 0.35,
    bgColor: "stroke-current bg-green-700",
    className: "flex items-center justify-center p-2",
    children: <p className="text-[mediumspringgreen]">hi</p>
  },
};

export const WithSunIcon: Story = {
  args: {
    width: 50,
    height: 50,
    roundness: 1.8,
    bgColor: "#ffe600",
    className: "flex items-center justify-center p-2",
    children: <SunIcon height={50} width={50} color="" className="stroke-current text-sky-500"/>
  },
};

export const WithMoonIcon: Story = {
  args: {
    width: 50,
    height: 50,
    roundness: 0.3,
    bgColor: "bg-purple-500",
    className: "flex items-center justify-center p-2",
    children: <MoonIcon height={50} width={50} color="#ffe600"/>
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