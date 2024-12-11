import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

type LogoProps = {
  src?: string | StaticImport;
  alt?: string;
  height?: number | `${number}` | undefined;
  width?: number | `${number}` | undefined;
};

const Logo = ({ src = '', alt = '', height = 50, width = 50 }: LogoProps) => {
  return <Image {...{ src, alt, height, width }} />;
};

export default Logo;
