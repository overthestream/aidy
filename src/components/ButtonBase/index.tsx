import React from 'react';
import styled from 'styled-components';

export interface ButtonBaseProps
  extends React.ComponentPropsWithoutRef<'button'> {
  disabled?: boolean;
}

interface ButtonBaseWrapperProps {
  disabled?: boolean;
}

const ButtonBaseWrapper = styled.button<ButtonBaseWrapperProps>`
  display: inline-flex;
  align-items: center;
  background-color: none;
  padding: 0;
  border: 0;
  margin: 0;

  &:not(:disabled) {
    cursor: pointer;
  }
`;

const ButtonBase = React.forwardRef<HTMLButtonElement, ButtonBaseProps>(
  (props, ref) => {
    const { disabled = false, children } = props;
    return (
      <ButtonBaseWrapper ref={ref} disabled={disabled} {...props}>
        {children}
      </ButtonBaseWrapper>
    );
  }
);

export default ButtonBase;
