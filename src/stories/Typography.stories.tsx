import { Story } from '@storybook/react';
import React from 'react';

import {
  Typography,
  TypographyElementType,
  TypographyProps,
} from '../components/Typography';

export const Gallery: Story = () => {
  const typographElements: TypographyElementType[] = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'p',
    'div',
    'span',
  ];
  return (
    <>
      {typographElements.map((element) => (
        <Typography elementType={element}>Lorem Ipsum</Typography>
      ))}
    </>
  );
};

export const Template: Story<TypographyProps> = (args) => {
  return <Typography {...args} />;
};

Template.args = {
  children: 'Lorem Ipsum',
};

export default {
  title: 'components/Typography',
  component: Typography,
};
