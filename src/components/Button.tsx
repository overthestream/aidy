import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { ButtonBase, ButtonBaseProps } from './ButtonBase';

export type ButtonVariant = 'default' | 'red' | 'green' | 'blue';

interface ButtonStyle {
  backgroundColor: React.CSSProperties['backgroundColor'];
  hoverColor: React.CSSProperties['backgroundColor'];
  activeColor: React.CSSProperties['backgroundColor'];
  color: React.CSSProperties['color'];
}

const buttonVariantMap: Record<ButtonVariant, ButtonStyle> = {
  default: {
    backgroundColor: oc.gray[0],
    hoverColor: oc.gray[1],
    activeColor: oc.gray[2],
    color: oc.gray[7],
  },
  green: {
    backgroundColor: oc.green[0],
    hoverColor: oc.green[1],
    activeColor: oc.green[2],
    color: oc.green[7],
  },
  blue: {
    backgroundColor: oc.blue[0],
    hoverColor: oc.blue[1],
    activeColor: oc.blue[2],
    color: oc.blue[7],
  },
  red: {
    backgroundColor: oc.red[0],
    hoverColor: oc.red[1],
    activeColor: oc.red[2],
    color: oc.red[7],
  },
};

export interface ButtonProps extends ButtonBaseProps {
  variant?: ButtonVariant;
  padding?: React.CSSProperties['padding'];
  fontWeight?: React.CSSProperties['fontWeight'];
}

interface ButtonWrapperProps extends Omit<ButtonProps, 'variant'> {
  theme: ButtonStyle;
}

const ButtonWrapper = styled(ButtonBase)<ButtonWrapperProps>`
  padding: ${(props) => props.padding ?? '8px'};
  font-weight: ${(props) => props.fontWeight};
  border-radius: 4px;

  transition: background-color 0.2s ease;

  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme.hoverColor};
  }

  &:active:not(:disabled) {
    background-color: ${(props) => props.theme.activeColor};
  }

  &:hover:disabled {
    cursor: not-allowed;
  }

  &:disabled {
    opacity: 0.4;
    filter: blur(0.1);
  }
`;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { fontWeight, padding, variant = 'default', children } = props;
    const theme = buttonVariantMap[variant];
    return (
      <ButtonWrapper
        padding={padding}
        fontWeight={fontWeight}
        theme={theme}
        ref={ref}
        {...props}
      >
        {children}
      </ButtonWrapper>
    );
  }
);
