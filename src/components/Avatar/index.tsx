import React from 'react';
import styled from 'styled-components';
import { BsFillPersonFill } from 'react-icons/bs';

type Shape = 'circle' | 'square';

export interface AvatarProps extends React.ComponentPropsWithoutRef<'div'> {
  shape?: Shape;
  size?: React.CSSProperties['width'];
  icon?: React.ReactElement;
  hasBorder?: boolean;
}

type AvatarWrapperProps = Omit<AvatarProps, 'icon'>;

const AvatarWrapper = styled.div<AvatarWrapperProps>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  padding: 4px;
  border-radius: ${(props) => (props.shape === 'circle' ? '100%' : '0px')};
  border: ${(props) => (props.hasBorder ? '2px solid' : 'none')};
`;

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { shape = 'circle', size = '16px', icon, hasBorder = true } = props;
  return (
    <AvatarWrapper hasBorder={hasBorder} ref={ref} shape={shape} size={size}>
      {icon || <BsFillPersonFill />}
    </AvatarWrapper>
  );
});

export default Avatar;
