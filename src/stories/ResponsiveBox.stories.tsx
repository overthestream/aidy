import { Story } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';

import { ResponsiveBox, ResponsiveBoxProps } from '../components/ResponsiveBox';

const ImplBox = styled.div`
  height: 200px;
  width: 100%;
  background-color: white;
`;

export const Gallery: Story = () => {
  return (
    <ResponsiveBox>
      <ImplBox>Lorem Ipsum</ImplBox>
    </ResponsiveBox>
  );
};

export const Template: Story<ResponsiveBoxProps> = (args) => {
  return <ResponsiveBox {...args}>{args.children}</ResponsiveBox>;
};

Template.args = {
  children: 'Lorem Ipsum',
};

export default {
  title: 'components/ResponsiveBox',
  component: ResponsiveBox,
};
