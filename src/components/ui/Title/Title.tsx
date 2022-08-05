import { FC, PropsWithChildren } from 'react';

type TitleTypes = {
  size?: number;
  margin?: number;
  variant?: Sizes;
};

type Sizes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const Title: FC<PropsWithChildren<TitleTypes>> = ({
  variant = 'h2',
  size = 32,
  margin = 1,
  children,
}) => {
  const Tag = `${variant}` as keyof JSX.IntrinsicElements;

  return (
    <Tag style={{ fontSize: `${size}px`, margin: `${margin}em` }}>
      {children}
    </Tag>
  );
};

export default Title;
