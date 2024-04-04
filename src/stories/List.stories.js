import React from 'react';
import { Story } from '@storybook/react';
import TagList from '../components/List';

export default {
  title: 'List',
  component: TagList,
};

const Template = (args) => <TagList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tags: [
    { name: 'Tag 1', count: 10 },
    { name: 'Tag 2', count: 5 },
    { name: 'Tag 3', count: 8 },
  ],
};
