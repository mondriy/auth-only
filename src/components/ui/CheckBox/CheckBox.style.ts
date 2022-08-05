import styled from 'styled-components';

export const Label = styled.label`
  display: inline-flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  position: relative;

  &::before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    outline: 1px solid var(--text-color);
    border-radius: 4px;
    margin-right: 15px;
    box-sizing: border-box;
  }

&::after {
    content: '';
    position: absolute;
    border-radius: 4px;
    width: 14px;
    height: 14px;
    left: 3px;
    transition: background 0.2s ease-in-out;;
`;

export const StyledCheckbox = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;

  &:checked + ${Label}::after {
    background-color: #0b76ef;
  }
`;
