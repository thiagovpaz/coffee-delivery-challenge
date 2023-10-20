import React from 'react';
import Image from 'next/image';

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return (
    <Image
      src="/images/logo.png"
      alt="Logo"
      width={85}
      height={40}
      className="h-auto"
    />
  );
};

export { Logo };
