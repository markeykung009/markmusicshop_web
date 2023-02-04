import Card from "./Card";
import BassFender1 from "../assets/u7.jpg";
import BassFender2 from "../assets/u8.jpg";
import GuitarFender1 from "../assets/zp.jpg";
import fenderLogo from "../assets/fenderlogo.svg";
import gibsonLogo from "../assets/gibsonlogo.svg";
import yamahaLogo from "../assets/yamahalogo.svg";

const HomeContent = ({ time, titleName }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1080px]">
        <div className="flex my-8 items-center">
          <h2 className="mr-8 text- font-bold text-xl">{titleName}</h2>
        </div>
        <div className="flex justify-around">
          <Card
            productPicture={time ? BassFender1 : fenderLogo}
            productName="Fender Player Precision Bass"
            productPrice="25000 บาท"
            soldOut="ขายแล้ว 2"
            time={time}
          />
          <Card
            productPicture={time ? BassFender2 : gibsonLogo}
            productName="Fender American Performer Mustang Bass"
            productPrice="52200 บาท"
            soldOut="ขายแล้ว 0"
            time={time}
          />
          <Card
            productPicture={time ? GuitarFender1 : yamahaLogo}
            productName="Fender Player Stratocaster"
            productPrice="28800 บาท"
            soldOut="ขายแล้ว 5"
            time={time}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
