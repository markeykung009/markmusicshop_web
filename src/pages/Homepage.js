import Navbar from "../layouts/Navbar";
import Banner from "../components/Banner";
import HomeContent from "../components/HomeContent";

const Homepage = () => {
  return (
    <>
      <Banner />
      <HomeContent time={true} titleName="Recommended" />
      <HomeContent time={false} titleName="Top Brands" />
    </>
  );
};

export default Homepage;
