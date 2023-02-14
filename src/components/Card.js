import { Link } from "react-router-dom";

const Card = ({
  productName,
  productPrice,
  soldOut,
  productPicture,
  time,
  productId,
}) => {
  console.log(productId);
  // if (productId) {
  return (
    <Link to={`/item/${productId}`}>
      <div className="zoom  w-56 h-80 border-[1px]  rounded-xl shadow-2xl bg-white mb-8 ">
        <div className={`${time ? "border-b-[1px]" : "mt-12"} h-56 relative `}>
          <img
            src={productPicture}
            alt="bass"
            className="h-full w-full  max-h-[210px] mt-2 "
          />
          {/* {time ? (
            <div className="absolute top-2 right-2 bg-[#f81717] px-5 py-0.5 text-white rounded-full shadow-2xl">
              sale
            </div>
          ) : null} */}
        </div>
        {time ? (
          <div className="p-2  h-24 flex flex-col justify-evenly bg-[#e7e3e3] rounded-b-xl">
            <div className="flex justify-center items-center flex-col ">
              <h3 className="text-[14px]">{productName} </h3>
            </div>
            <div className="flex justify-between items-center mt-2">
              <p>{productPrice}</p>
              <small className="text-[10px]">{soldOut}</small>
            </div>
          </div>
        ) : null}
      </div>
    </Link>
  );
  // }
  // return <></>;
};

export default Card;
