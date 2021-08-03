import { Story } from '@storybook/react';
import React from 'react';

import Avatar, { AvatarProps } from '.';

export const Gallery: Story = () => {
  return <Avatar />;
};

export const Template: Story<AvatarProps> = (args) => {
  return <Avatar {...args}>{args.children}</Avatar>;
};

Template.args = {
  shape: 'square',
};

export default {
  title: 'components/Avatar',
  component: Avatar,
};
