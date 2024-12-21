// import dynamic from "next/dynamic";
import './styles.modules.scss';
// const Map = dynamic(() => import("./components/Map"), { ssr: false });
import MainBannerImg from '@images/main-banner.jpg';

const Home = () => {
  return (
    <div className="wrapper">
      <div
        className="section banner-section"
        style={{
          backgroundImage: `url(${MainBannerImg.src})`,
        }}
      >
        <div className="wrap">
          <h1>HomePage</h1>
        </div>
      </div>
      {/* <TestComponent /> */}
      <div>Main Page Of the template</div>
    </div>
  );
};

export default Home;
