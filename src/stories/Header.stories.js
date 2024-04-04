import React from "react";
import { action } from "@storybook/addon-actions";
import  Header  from "../components/Header.js";

export default {
  title: "Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  loading: false,
  error: null,
  pageSize: 10,
  handlePageSizeChange: action("handlePageSizeChange"),
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  error: null,
  pageSize: 10,
  handlePageSizeChange: action("handlePageSizeChange"),
};

export const Error = Template.bind({});
Error.args = {
  loading: false,
  error: "Error fetching data",
  pageSize: 10,
  handlePageSizeChange: action("handlePageSizeChange"),
};
