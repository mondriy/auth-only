import { FC, PropsWithChildren } from 'react';
import { StyledButton } from './Buttons.style';

type ButtonType = {
  type?: 'submit' | 'button';
  color?: string;
  width?: string | number;
  textColor?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const Button: FC<PropsWithChildren<ButtonType>> = ({
  disabled,
  color,
  textColor,
  width = '100%',
  type,
  children,
  onClick,
}) => {
  return (
    <StyledButton
      color={color}
      textColor={textColor}
      width={width}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
