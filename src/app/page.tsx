// import dynamic from "next/dynamic";
import './styles.modules.scss';
// const Map = dynamic(() => import("./components/Map"), { ssr: false });
import MainBannerImg from '@images/main-banner.jpg';
import Logo from '@images/logo.svg';
import Image from 'next/image';
import { Button } from '@components/Button';
import vegetarianImg from '@images/vegetarian.png';
import leaves from '@images/leaves.png';
import bludo from '@images/bludo.jpg';

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
      <div> 
        <section className="menu">
          <div className="content">
            <div className="food-marks">
              <div className="m-item">
                <div className="m-ico">
                <Image
                  src={vegetarianImg}
                  alt="Main Banner"
                  width={25}
                  objectFit="cover"
                /></div>
                <p>Vegetarian dish</p>
                </div>
              <div className="m-item">
                <div className="m-ico">
                <Image
                  src={leaves}
                  alt="Main Banner"
                  width={25}
                  objectFit="cover"
                />
                </div>
                <p>Vegan dish</p>
                </div>
              <div className="m-item"><p>Your choice</p></div>
            </div>
            <h2>Menu</h2>
            <div className="menu-list">
              <div className="menu-list-content">
                <h3>For a Good Beginning</h3>
                <div className="menu-list__item">
                  <div style={{ width: '205px' }}>
                    <Image
                      src={bludo}
                      alt="Main Banner"
                      height={180}
                      style={{
                        width: '100%',
                        borderRadius: '20px',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  <div className="menu-list-item-descr">
                    <h4 className="title">Creole potatoes</h4>
                    <p className="components">
                    boletus mushrooms/ seasonal vegetables/ cherry tomatoes/ dill sauce</p>
                  </div>
                </div>

                <div className="menu-list__item">
                  <div style={{ width: '205px' }}>
                    <Image
                      src={bludo}
                      alt="Main Banner"
                      height={180}
                      style={{
                        width: '100%',
                        borderRadius: '20px',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  <div className="menu-list-item-descr">
                    <h4 className="title">Creole potatoes</h4>
                    <p className="components">
                    boletus mushrooms/ seasonal vegetables/ cherry tomatoes/ dill sauce</p>
                  </div>
                </div>

                <div className="menu-list__item">
                  <div style={{ width: '205px' }}>
                    <Image
                      src={bludo}
                      alt="Main Banner"
                      height={180}
                      style={{
                        width: '100%',
                        borderRadius: '20px',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  <div className="menu-list-item-descr">
                    <h4 className="title">Creole potatoes</h4>
                    <p className="components">
                    boletus mushrooms/ seasonal vegetables/ cherry tomatoes/ dill sauce</p>
                  </div>
                </div>
              </div>

              <div className="menu-list-content">
                <h3>For a Good Beginning</h3>
                <div className="menu-list__item">
                  <div style={{ width: '205px' }}>
                    <Image
                      src={bludo}
                      alt="Main Banner"
                      height={180}
                      style={{
                        width: '100%',
                        borderRadius: '20px',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  <div className="menu-list-item-descr">
                    <h4 className="title">Creole potatoes</h4>
                    <p className="components">
                    boletus mushrooms/ seasonal vegetables/ cherry tomatoes/ dill sauce</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section></div>
    </div>
  );
};

export default Home;
