import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const StyledButton = styled.button<{
  color?: string;
  width?: string | number;
  textColor?: string;
}>`
  width: ${({ width }) => (typeof width === 'number' ? width + 'px' : width)};
  margin: 25px 0;
  padding: 15px 0;
  border: none;
  outline: none;
  border-radius: 8px;
  background: ${({ color }) => (color ? color : 'var(--accent-color)')};
  font-weight: bold;
  font-size: 18px;
  color: ${({ textColor }) => (textColor ? textColor : 'var(--primary-color)')};
  transition: background 0.3s;
  cursor: pointer;

  &:hover {
    background: ${({ color }) =>
      color ? darken(0.2, color) : 'var(--accent-darken-color)'};
  }

  &:disabled {
    background: ${({ color }) =>
      color ? lighten(0.2, color) : 'var(--accent-lighten-color)'};
  }
`;
