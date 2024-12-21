// import dynamic from "next/dynamic";
import './styles.modules.scss';
// const Map = dynamic(() => import("./components/Map"), { ssr: false });
import MainBannerImg from '@images/main-banner.jpg';
import Logo from '@images/logo.svg';
import Image from 'next/image';
import { Button } from '@components/Button';

const Home = () => {
  return (
    <div className="wrapper">
      <div
        className="section main__section"
        style={{
          backgroundImage: `url(${MainBannerImg.src})`,
        }}
      >
        <div className="wrap">
          <div className="content">
            <div className="content__item content__text">
              <h3 className="h3">Zielone Serce Krakowa</h3>
              <p className="p">
                Wyjątkowa restauracja z produktami od lokalnych dostawców
              </p>
            </div>
            <div className="content__item content__visual">
              <div className="logo">
                <Image
                  src={Logo}
                  alt="Main Banner"
                  width={195}
                  objectFit="cover"
                />
              </div>
              <Button />
            </div>
          </div>
        </div>
      </div>
      {/* <TestComponent /> */}
      <div>Main Page Of the template</div>
    </div>
  );
};

export default Home;
