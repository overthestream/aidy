import { Story } from '@storybook/react';
import React from 'react';

import ButtonBase, { ButtonBaseProps } from '.';

export const Gallery: Story = () => {
  return <ButtonBase>Lorem Ipsum</ButtonBase>;
};

export const Template: Story<ButtonBaseProps> = (args) => {
  return <ButtonBase {...args} />;
};

Template.args = {
  children: 'Lorem Ipsum',
};

export default {
  title: 'components/ButtonBase',
  component: ButtonBase,
};
