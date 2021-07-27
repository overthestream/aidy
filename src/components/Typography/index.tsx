import React from 'react';
import styled from 'styled-components';

export type TypographyElementType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'div';

export interface TypographyProps
  extends React.ComponentPropsWithoutRef<TypographyElementType> {
  color?: React.CSSProperties['color'];
  elementType?: TypographyElementType;
  fontWeight?: React.CSSProperties['fontWeight'];
  fontSize?: React.CSSProperties['fontSize'];
  fontFamily?: React.CSSProperties['fontFamily'];
  textDecoration?: React.CSSProperties['textDecoration'];
  textAlign?: React.CSSProperties['textAlign'];
  verticalAlign?: React.CSSProperties['verticalAlign'];
}

type TypographyWrapperProps = Omit<TypographyProps, 'elementType'>;

const typographyElementTypeMap: Record<
  TypographyElementType,
  keyof JSX.IntrinsicElements
> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  span: 'span',
  div: 'div',
};

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (props, ref) => {
    const {
      elementType = 'div',
      fontWeight,
      fontSize,
      fontFamily,
      color,
      textDecoration,
      textAlign,
      verticalAlign,
      children,
    } = props;
    const Element = typographyElementTypeMap[elementType];

    const TypographyWrapper = styled(Element)<TypographyWrapperProps>`
      color: ${(styleProps) => styleProps.color};
      font-weight: ${(styleProps) => styleProps.fontWeight};
      font-size: ${(styleProps) => styleProps.fontSize};
      font-family: ${(styleProps) => styleProps.fontFamily};
      text-decoration: ${(styleProps) => styleProps.textDecoration};
      text-align: ${(styleProps) => styleProps.textAlign};
      vertical-align: ${(styleProps) => styleProps.verticalAlign};
    `;
    return (
      <TypographyWrapper
        fontWeight={fontWeight}
        fontSize={fontSize}
        color={color}
        fontFamily={fontFamily}
        textDecoration={textDecoration}
        textAlign={textAlign}
        verticalAlign={verticalAlign}
        ref={ref}
        {...props}
      >
        {children}
      </TypographyWrapper>
    );
  }
);
export default Typography;
