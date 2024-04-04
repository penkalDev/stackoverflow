import React from 'react';
import { Story } from '@storybook/react';
import Sort from '../components/Sort';

export default {
  title: 'Sort',
  component: Sort,
};

const Template = (args) => <Sort {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'popular',
  onChange: (event) => console.log(`Sort changed to: ${event.target.value}`),
};
