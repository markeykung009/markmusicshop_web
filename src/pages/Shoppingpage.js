import Card from "../components/Card";
import BassFender1 from "../assets/u7.jpg";
import fenderLogo from "../assets/fenderlogo.svg";
import HomeContent from "../components/HomeContent";
import * as productApi from "../apis/product-api";
import { useEffect, useState } from "react";
import useProduct from "../hooks/useProduct";

const Shoppingpage = time => {
  const [product, setProduct] = useState([]);
  const { cart, setCart, getCartList } = useProduct();

  const fetch = async () => {
    try {
      const res = await productApi.getAllProduct();
      setProduct(res.data.product);

      console.log(res.data.product[0]?.productImage);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <HomeContent time={true} titleName="Recommended" />
      <hr />
      <h1 className="text-2xl text-center mt-5">All Product</h1>
      <div className="flex flex-wrap justify-center gap-5 mt-5">
        {product.map((el, idx) => {
          console.log("kuy", el.id);
          return (
            <Card
              productId={el.id}
              productPicture={true ? el.productImage : fenderLogo}
              productName={el.title}
              productPrice={el.price + " บาท"}
              soldOut="ขายแล้ว 2"
              time={true}
              key={idx}
            />
          );
        })}
      </div>
    </>
  );
};

export default Shoppingpage;
