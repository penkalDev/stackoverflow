import React from 'react';
import { Story } from '@storybook/react';
import CustomPagination from '../components/Pagination';

export default {
  title: 'Pagination',
  component: CustomPagination,
};

const Template = (args) => <CustomPagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentPage: 1,
  onPageChange: (page) => console.log(`Page changed to: ${page}`),
};
