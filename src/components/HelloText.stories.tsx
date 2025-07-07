import type { Meta, StoryObj } from '@storybook/react';
import { HelloText } from './HelloText';

const meta: Meta<typeof HelloText> = {
  title: 'Components/HelloText',
  component: HelloText,
  argTypes: {
    text: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<typeof HelloText>;

export const Default: Story = {
  args: {
    text: 'Hello Storybook!',
  },
}; 