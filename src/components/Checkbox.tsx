import React, { useState } from 'react';
import styled from 'styled-components';
import oc from 'open-color';

export type CheckboxVariant = 'red' | 'green' | 'blue';

interface CheckboxVariantStyle {
  boxColor: React.CSSProperties['backgroundColor'];
  hoverColor: React.CSSProperties['backgroundColor'];
  focusColor: React.CSSProperties['backgroundColor'];
}

const CheckboxVariantMap: Record<CheckboxVariant, CheckboxVariantStyle> = {
  red: {
    boxColor: oc.red[3],
    hoverColor: oc.red[1],
    focusColor: oc.red[2],
  },
  green: {
    boxColor: oc.green[3],
    hoverColor: oc.green[1],
    focusColor: oc.green[2],
  },
  blue: {
    boxColor: oc.blue[3],
    hoverColor: oc.blue[1],
    focusColor: oc.blue[2],
  },
};

interface StyledCheckboxProps extends Omit<CheckboxProps, 'boxColor'> {
  boxStyle: CheckboxVariantStyle;
}

export interface CheckboxProps extends React.ComponentPropsWithoutRef<'input'> {
  isDisabled?: boolean;
  isChecked?: boolean;
  isDefaultChecked?: boolean;
  boxTheme?: CheckboxVariant;
}

const CheckboxContainer = styled.div`
  color: ${(props) => props.color};
`;

const HiddenCheckbox = styled.input.attrs({
  type: 'checkbox',
})`
  border: 0;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  visibility: hidden;
`;

const BoxIcon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const StyledCheckbox = styled.div<StyledCheckboxProps>`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-bottom: 1.4px;
  margin-right: 5px;
  background: ${(props) =>
    props.isChecked ? props.boxStyle.boxColor : oc.gray[2]};
  border-radius: 3px;
  transition: all 150ms;
  ${BoxIcon} {
    visibility: ${(props) => (props.isChecked ? 'visible' : 'hidden')};
  }
  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${(props) => props.boxStyle.focusColor};
  }
  ${HiddenCheckbox}:disabled+& {
    opacity: 0.25;
    filter: blur(0.2px);
    background: ${oc.gray[7]};
  }
  &:hover {
    background: ${(props) =>
      props.isChecked ? props.boxStyle.boxColor : props.boxStyle.hoverColor};
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  vertical-align: text-bottom;
`;

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const {
      isDisabled = false,
      isDefaultChecked = false,
      boxTheme = 'red',
      children,
    } = props;

    const checkboxTheme = CheckboxVariantMap[boxTheme];

    const [isChecked, setIsChecked] = useState<boolean>(isDefaultChecked);

    const handleCheckEvent = () => {
      setIsChecked(!isChecked);
    };

    return (
      <>
        <CheckboxContainer {...props}>
          <CheckboxLabel>
            <HiddenCheckbox
              checked={isChecked}
              disabled={isDisabled}
              onClick={handleCheckEvent}
            />
            <StyledCheckbox
              isChecked={isChecked}
              isDisabled={isDisabled}
              boxStyle={checkboxTheme}
              ref={ref}
            >
              <BoxIcon viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </BoxIcon>
            </StyledCheckbox>
            {children}
          </CheckboxLabel>
        </CheckboxContainer>
      </>
    );
  }
);
