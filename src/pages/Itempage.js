import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import * as productApi from "../apis/product-api";
import * as cartApi from "../apis/cart-api";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Itempage = () => {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const params = useParams();
  const navigate = useNavigate();
  const { cart, setCart } = useProduct();
  const { authenticatedUser, setOpenLogin } = useAuth();
  console.log(params.productId);

  const isInCart = cart.find(el => el.id == params.productId);
  console.log(isInCart);

  const fetchProduct = async () => {
    try {
      const res = await productApi.matchProduct(params.productId);
      console.log(res);
      setProduct(res.data.product);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (isInCart) {
      setQuantity(isInCart.quantity);
    }
    fetchProduct();
  }, [params.productId]);

  const addCart = async () => {
    try {
      await cartApi.createCart({
        productId: params.productId,
        amount: quantity,
      });
      navigate("/cart");
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickCheck = () => {
    if (authenticatedUser) {
      addCart();
    } else {
      setOpenLogin(true);
    }
  };

  const countMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }

    const checkCart = cart.findIndex(el => el.id == params.productId);

    if (checkCart === -1) {
      setCart([
        ...cart,
        {
          id: params.productId,
          title: product.title,
          price: product.price,
          productImage: product.productImage,
          type: product.Category?.type,
          quantity: quantity,
        },
      ]);
    } else {
      const newProduct = cart[checkCart];
      newProduct.quantity = quantity;
      const newCart = [...cart];
      newCart[checkCart] = newProduct;
      setCart(newCart);
    }
  };

  const countPlus = () => {
    setQuantity(quantity + 1);

    const checkCart = cart.findIndex(el => el.id == params.productId);

    if (checkCart === -1) {
      setCart([
        ...cart,
        {
          id: params.productId,
          title: product.title,
          price: product.price,
          productImage: product.productImage,
          type: product.Category?.type,
          quantity: quantity,
        },
      ]);
    } else {
      const newProduct = { ...cart[checkCart] };
      newProduct.quantity = quantity;
      const newCart = [...cart];
      newCart[checkCart] = newProduct;
      setCart(newCart);
    }
  };

  return (
    <div>
      <div className="flex  m-3 p-3">
        <div className="border-2 shadow-xl">
          <img src={product.productImage} alt="" className="h-96 w-96 p-3" />
        </div>
        <div className="flex flex-col gap-5 ">
          <p className="ml-5 text-[20px]">{product.Category?.type}</p>
          <p className="ml-5">{product.title}</p>
          <p className="ml-5">{product.price} บาท</p>
          <div className="flex flex-col gap-5 items-center">
            <p>Quantity</p>
            <p>{quantity}</p>
            <div>
              <button
                className="mx-5 bg-teal-400 w-10 h-10 rounded-full"
                onClick={countMinus}
              >
                -
              </button>
              <button
                className="mx-5  bg-teal-400 w-10 h-10 rounded-full"
                onClick={countPlus}
              >
                +
              </button>
            </div>
            <button
              className="bg-amber-500 w-80 rounded-full py-2 ml-3"
              onClick={handleClickCheck}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itempage;
