import { Story } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import Tag, { TagProps } from '.';

const Layout = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

type colorTuple = [
  React.CSSProperties['backgroundColor'],
  React.CSSProperties['color']
];

const Item = styled.div`
  margin-right: 5px;
`;

export const Gallery: Story = () => {
  const colorTuples: colorTuple[] = [
    [oc.gray[0], oc.gray[7]],
    [oc.green[0], oc.green[7]],
    [oc.blue[0], oc.blue[7]],
    [oc.red[0], oc.red[7]],
  ];

  return (
    <>
      {colorTuples.map((tuple, idx) => (
        <Layout key={idx}>
          <Item>
            <Tag
              backgroundColor={tuple[0]}
              typographyProps={{ color: tuple[1] }}
            >
              Lorem Ipsum
            </Tag>
          </Item>
          <Tag
            backgroundColor={tuple[0]}
            typographyProps={{ color: tuple[1] }}
            borderColor={tuple[1]}
          >
            Lorem Ipsum
          </Tag>
        </Layout>
      ))}
    </>
  );
};

export const Template: Story<TagProps> = (args) => {
  return <Tag {...args}>{args.children}</Tag>;
};

Template.args = {
  children: 'Lorem Ipsum',
};

export default {
  title: 'components/Tag',
  component: Tag,
};
