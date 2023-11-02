import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import Button from './Button';

const meta = {
  title: 'Common/Button',
  render: (props) => <Button {...props}>{props.children}</Button>,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: ['default', 'primary', 'danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'base', 'large'],
    },
    onClick: {
      action: 'clicked',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

const baseArgs = {
  children: 'BaseArgs',
  color: undefined,
  size: undefined,
  onClick: undefined,
};

export const HelloButton1: Story = {
  args: {
    ...baseArgs,
    children: 'Hello World',
  },
};

export const HelloButton2: Story = {
  args: {
    ...baseArgs,
    children: 'Foo Bar',
  },
};

export const PrimaryButton: Story = {
  args: {
    ...baseArgs,
    children: 'Primary',
    color: 'primary',
  },
};

export const DangerButton: Story = {
  args: {
    ...baseArgs,
    children: 'Danger',
    color: 'danger',
  },
};

export const SmallButton: Story = {
  args: {
    ...baseArgs,
    children: 'Small',
    size: 'small',
  },
};

export const LargeButton: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole('button');
    await userEvent.click(button);
  },
  args: {
    ...baseArgs,
    children: 'Large',
    size: 'large',
    onClick: () => alert('click'),
  },
};
