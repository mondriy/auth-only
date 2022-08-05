import styled from 'styled-components';

export const StyledErrorBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 25px 0;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid var(--error-color);
  background: var(--error-lighten-color);
  color: var(--text-color);
`;

export const ErrorIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--error-color);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ffc8c8;
  font-size: 14px;
  flex-shrink: 0;
`;

export const ErrorText = styled.p`
  font-size: 14px;
  margin: 0 10px;
`;
