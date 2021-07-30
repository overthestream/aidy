import { Story } from '@storybook/react';
import React from 'react';

import Checkbox, { CheckboxProps, CheckboxVariant } from '.';

export const Gallery: Story = () => {
  const defaultChecks: boolean[] = [true, false];
  const variants: CheckboxVariant[] = ['blue', 'green', 'red'];

  return (
    <>
      {variants.map((variant: CheckboxVariant, idx) => (
        <Checkbox key={idx} isDefaultChecked boxTheme={variant}>
          Lorem Ipsum
        </Checkbox>
      ))}
      {defaultChecks.map((defaultChecked, index) => (
        <Checkbox key={index} isDefaultChecked={defaultChecked} isDisabled>
          Lorem Ipsum
        </Checkbox>
      ))}
    </>
  );
};

export const Template: Story<CheckboxProps> = (args) => {
  return <Checkbox {...args}>{args.children}</Checkbox>;
};

Template.args = {
  boxTheme: 'red',
  isDefaultChecked: true,
  children: 'Lorem Ipsum',
};

export default {
  title: 'components/Checkbox',
  component: Checkbox,
};
