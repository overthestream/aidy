import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import Typography, { TypographyProps } from '../Typography';

export interface TagProps extends React.ComponentPropsWithoutRef<'div'> {
  padding?: React.CSSProperties['padding'];
  borderColor?: React.CSSProperties['borderColor'];
  backgroundColor?: React.CSSProperties['backgroundColor'];
  typographyProps?: TypographyProps;
}

type TagWrapperProps = Omit<TagProps, 'typographyProps'>;

const TagWrapper = styled.div<TagWrapperProps>`
  display: inline-flex;
  border: transparent 1px solid;

  padding: ${(props) => props.padding};
  border-radius: 5000px;
  border-color: ${(props) => props.borderColor};

  background-color: ${(props) => props.backgroundColor};
`;

const Tag = React.forwardRef<HTMLDivElement, TagProps>((props, ref) => {
  const {
    typographyProps = { color: oc.blue[9] },
    padding = '8px 10px',
    children,
    backgroundColor = oc.blue[1],
    borderColor,
  } = props;
  return (
    <TagWrapper
      padding={padding}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      ref={ref}
      {...props}
    >
      <Typography {...typographyProps}>{children}</Typography>
    </TagWrapper>
  );
});

export default Tag;
