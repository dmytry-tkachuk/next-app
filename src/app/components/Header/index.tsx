import React from 'react';
import './styles.modules.scss';
import Logo from '@images/logo.svg';
import Image from 'next/image';

const Header: React.FC = () => {
  return <header>
      <div className="container">
        <div className="logo">
        <Image
          src={Logo}
          alt="Main Banner"
          width={62}
          objectFit="cover"
        />
        </div>
      </div>
    </header>;
};

export default Header;
