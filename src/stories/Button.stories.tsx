import { Story } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';

import { Button, ButtonProps, ButtonVariant } from '../components/Button';

const Layout = styled.div`
  display: flex;
  margin-bottom: 8px;
`;
const Item = styled.div`
  margin-right: 5px;
`;
export const Gallery: Story = () => {
  const variants: ButtonVariant[] = ['default', 'blue', 'green', 'red'];

  return (
    <>
      {variants.map((variant, idx) => (
        <Layout key={idx}>
          <Item>
            <Button variant={variant}>Lorem Ipsum</Button>
          </Item>
          <Button variant={variant} disabled>
            Lorem Ipsum
          </Button>
        </Layout>
      ))}
    </>
  );
};

export const Template: Story<ButtonProps> = (args) => {
  return <Button {...args}>{args.children}</Button>;
};

Template.args = {
  variant: 'blue',
  children: 'Lorem Ipsum',
};

export default {
  title: 'components/Button',
  component: Button,
};
