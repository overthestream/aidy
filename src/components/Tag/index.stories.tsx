import { Story } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import Tag, { TagProps } from '.';

type TagVariant = 'default' | 'red' | 'green' | 'blue';

interface TagStyle {
  backgroundColor: React.CSSProperties['backgroundColor'];
  color: React.CSSProperties['color'];
}

const tagVariants: Record<TagVariant, TagStyle> = {
  default: {
    backgroundColor: oc.gray[0],
    color: oc.gray[7],
  },
  green: {
    backgroundColor: oc.green[0],
    color: oc.green[7],
  },
  blue: {
    backgroundColor: oc.blue[0],
    color: oc.blue[7],
  },
  red: {
    backgroundColor: oc.red[0],
    color: oc.red[7],
  },
};

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
