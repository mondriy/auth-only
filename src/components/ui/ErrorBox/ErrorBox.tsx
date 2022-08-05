import { FC, PropsWithChildren } from 'react';
import { ErrorIcon, ErrorText, StyledErrorBox } from './ErrorBox.style';

const ErrorBox: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledErrorBox>
      <ErrorIcon>!</ErrorIcon>
      <ErrorText>{children}</ErrorText>
    </StyledErrorBox>
  );
};

export default ErrorBox;
