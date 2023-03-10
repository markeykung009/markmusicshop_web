import { useEffect, useState } from "react";
import * as productApi from "../apis/product-api";
import fenderLogo from "../assets/fenderlogo.svg";
import Card from "../components/Card";
import Notfound from "../components/Notfound";

const Searchpage = () => {
  const [product, setProduct] = useState([]);
  const [word, setWord] = useState("");
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

  const searchProduct = product => {
    return product.filter(el => {
      return (
        el.title.toLowerCase().includes(word.toLowerCase()) ||
        el.title.brand?.toLowerCase().includes(word.toLowerCase())
      );
    });
  };

  console.log(product);

  const show = searchProduct(product);

  return (
    <div className="m-10">
      <div className="flex flex-col items-center">
        <input
          type="text"
          placeholder="ค้นหา"
          className="w-9/12"
          value={word}
          onChange={e => setWord(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap justify-center gap-5 mt-5">
        {show.length === 0 ? (
          <Notfound />
        ) : (
          show.map((el, idx) => {
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
          })
        )}
      </div>
    </div>
  );
};

export default Searchpage;
