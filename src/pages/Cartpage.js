import { useEffect } from "react";
import useProduct from "../hooks/useProduct";
import * as cartApi from "../apis/cart-api";
import { Link } from "react-router-dom";

const Cartpage = () => {
  const { cart, setCart, getCartList, setPriceProcess, priceProcess } =
    useProduct();

  useEffect(props => {
    getCartList();
  }, []);

  useEffect(() => {
    const result = cart.reduce((acc, el) => {
      acc += el.price * el.quantity;
      return acc;
    }, 0);
    setPriceProcess(result);
  }, [cart]);

  // useEffect(() => {
  //   setPriceProcess()
  // }, [priceProcess])

  const addCart = async ({ id, quantity }) => {
    try {
      await cartApi.createCart({
        productId: id,
        amount: quantity,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const countMinus = async (id, cartId) => {
    const checkCart = cart.findIndex(el => el.id == id);
    const newProduct = { ...cart[checkCart] };
    newProduct.quantity -= 1;
    newProduct.total -= parseFloat(newProduct.price);
    const newCart = [...cart];
    newCart[checkCart] = newProduct;
    if (newProduct.quantity < 0) {
      return deleteCart(cartId);
    }
    console.log(newCart);
    setCart(newCart);

    await addCart({ id, quantity: newCart[checkCart].quantity });
  };

  const countPlus = async id => {
    const checkCart = cart.findIndex(el => el.id == id);
    console.log(checkCart);
    const newProduct = { ...cart[checkCart] };
    newProduct.quantity += 1;
    newProduct.total += parseFloat(newProduct.price);
    const newCart = [...cart];
    newCart[checkCart] = newProduct;
    setCart(newCart);
    await addCart({ id, quantity: newCart[checkCart].quantity });
  };

  const deleteCart = async id => {
    const newCart = cart.filter(el => el.cartId !== id);
    setCart(newCart);
    await cartApi.deleteCart(id);
  };

  return (
    <div className="m-5">
      <div>
        <h1>your cart</h1>
        <div className="flex justify-center my-5">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-11/12 h-2"></div>
        </div>
        <div className="flex justify-between items-center">
          <p>product</p>
          <p>total</p>
        </div>
        <hr className="my-3 text-black" />
      </div>
      {cart.map((el, idx) => (
        <div key={idx}>
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <div>
                <img className="h-56 w-56" src={el.productImage} alt="" />
              </div>
              <div className="flex flex-col justify-between gap-20 ">
                <div>
                  <p>{el.title}</p>
                  <p>{el.price}</p>
                </div>
                <div className="flex border-2 w-24 justify-center gap-3 items-center">
                  <button
                    onClick={() => {
                      countMinus(el.id, el.cartId);
                    }}
                  >
                    -
                  </button>
                  <p> {el.quantity} </p>
                  <button
                    onClick={() => {
                      countPlus(el.id);
                    }}
                  >
                    +
                  </button>
                  <button>
                    <i
                      className="fa-solid fa-trash"
                      onClick={() => {
                        deleteCart(el.cartId);
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p>{el.total}</p>
            </div>
          </div>
        </div>
      ))}

      <div>
        <hr className="my-3 text-black" />
        <div className="flex justify-between items-center mt-10">
          <p>Cart Total</p>
          <p>{priceProcess} บาท</p>
        </div>
        <div className="flex justify-center items-center my-5">
          <Link to="/payment">
            <button className="text-white p-3 w-11/12 bg-black">
              Check out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cartpage;
