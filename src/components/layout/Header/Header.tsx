import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Title } from 'components/ui';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledHeader>
      <Title variant='h1' margin={0.5} size={64}>
        ONLY.
      </Title>
      {children}
    </StyledHeader>
  );
};

export default Header;
