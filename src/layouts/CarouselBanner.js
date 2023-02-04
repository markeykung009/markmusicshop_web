import { Carousel } from "flowbite-react";
import bannereg from "../assets/bannereg.jpg";
import bannerbass from "../assets/bannerbass.jpg";
import bannerag from "../assets/bannerag.jpg";
// import secretImage from "../assets/dang.gif";

const CarouselBanner = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src={bannereg} alt="..." />
        <img src={bannerbass} alt="..." />
        <img src={bannerag} alt="..." />
        {/* <img src={secretImage} alt="..." className="h-full" /> */}
      </Carousel>
    </div>
  );
};

export default CarouselBanner;
