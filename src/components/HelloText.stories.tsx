import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HelloText, HelloTextProps } from './HelloText';

export default {
  title: 'Components/HelloText',
  component: HelloText,
  argTypes: {
    text: { control: 'text' },
  },
} as ComponentMeta<typeof HelloText>;

const Template: ComponentStory<typeof HelloText> = (args: HelloTextProps) => <HelloText {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Hello Storybook!',
}; 