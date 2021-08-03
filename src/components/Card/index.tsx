import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import Typography, { TypographyProps } from '../Typography';

export type Text = {
  title?: string;
  content?: string;
  typographyProps?: TypographyProps;
};

export interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
  text: Text;
  backgroundColor?: React.CSSProperties['backgroundColor'];
  padding?: React.CSSProperties['padding'];
  border?: React.CSSProperties['border'];
  borderColor?: React.CSSProperties['borderColor'];
  cardImg?: React.ReactElement;
}

type CardWrapperProps = Omit<CardProps, 'text'> & Omit<CardProps, 'cardImg'>;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${oc.gray[2]};
`;

const ImgWrapper = styled.div`
  margin-bottom: 2px;
`;

const CardWrapper = styled.div<CardWrapperProps>`
  display: inline-flex;
  flex-direction: column;
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundColor};
  box-shadow: ${oc.gray[2]} 0px 1px 3px 0px
    ${(props) => props.border && `, ${oc.gray[3]} 0px 0px 0px 1px inset`};
  border-radius: 4px;

  border: ${(props) => props.border};
  border-color: ${(props) => props.borderColor};
`;

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const {
    text,
    backgroundColor = oc.white,
    padding = '16px',
    border,
    borderColor,
    cardImg,
  } = props;
  return (
    <CardWrapper
      border={border}
      borderColor={borderColor}
      padding={padding}
      backgroundColor={backgroundColor}
      ref={ref}
      {...props}
    >
      {cardImg ? (
        <>
          <ImgWrapper>{cardImg}</ImgWrapper>
          <Divider />
        </>
      ) : (
        <div />
      )}
      {text.title ? (
        <Typography fontWeight="bold" {...text.typographyProps}>
          {text.title}{' '}
        </Typography>
      ) : (
        <div />
      )}
      <Typography {...text.typographyProps}>{text.content}</Typography>
    </CardWrapper>
  );
});

export default Card;
