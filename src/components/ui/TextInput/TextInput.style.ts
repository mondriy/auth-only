import styled from 'styled-components';

export const StyledInput = styled.input<{ error: boolean }>`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  border: none;
  background: var(--secondary-color);
  color: var(--text-color);
  outline: ${({ error }) => (error ? '1px solid var(--error-color)' : 'none')};

  &:focus {
    outline: 1px solid var(--accent-color);
  }
`;

export const Label = styled.label``;

export const Error = styled.span`
  display: block;
  font-size: 14px;
  color: var(--error-color);
`;

export const Container = styled.div`
  margin: 15px 0 20px;
`;
