import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

type SectionType = {
  width?: number | string;
  height?: number | string;
  padding?: number | string;
  margin?: number | string;
  display?: 'flex' | 'block';
};

const StyledSection = styled.section<SectionType>`
  width: ${({ width }) => (typeof width === 'number' ? width + 'px' : width)};
  height: ${({ height }) =>
    typeof height === 'number' ? height + 'px' : height};
  display: ${({ display }) => display};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

const Section: FC<PropsWithChildren<SectionType>> = ({
  width = '100%',
  height = '100%',
  padding = '0',
  margin = '0 auto',
  display = 'flex',
  children,
}) => {
  return (
    <StyledSection
      padding={padding}
      margin={margin}
      height={height}
      width={width}
      display={display}
    >
      {children}
    </StyledSection>
  );
};

export default Section;
