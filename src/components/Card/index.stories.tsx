import { Story } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';

import Card, { Text, CardProps } from '.';

const Img = styled.img`
  width: 200px;
  height: 200px;
`;

export const Gallery: Story = () => {
  const text: Text = {
    title: 'Lorem Ipsum',
    content: 'Lorem Ipsum',
  };
  return (
    <>
      <Card text={text} cardImg={<Img alt="profile" />} />
    </>
  );
};

export const Template: Story<CardProps> = (args) => {
  return <Card {...args}>{args.children}</Card>;
};

Template.args = {
  text: { content: 'Lorem Ipsum' },
};

export default {
  title: 'components/Card',
  component: Card,
};
