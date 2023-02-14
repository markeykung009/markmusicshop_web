import { useRef, useState } from "react";
import markslip from "../assets/markslip.jpg";
import useProduct from "../hooks/useProduct";
import * as OrderApi from "../apis/order-api";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Paymentpage = () => {
  const {
    priceProcess,
    file,
    setFile,
    address,
    setAddress,
    status,
    setLoading,
  } = useProduct();

  const { authenticatedUser } = useAuth();
  const navigate = useNavigate();

  const inputEl = useRef();

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("transactionImg", file);
      formData.append("address", address);
      formData.append("totalPrice", priceProcess);
      formData.append("status", status);
      setLoading(true);
      await OrderApi.createOrder(formData);

      navigate("/status");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="m-10 flex flex-col justify-center items-center">
      <p>{priceProcess} บาท</p>
      <p>โอนเงินมาด้วยนะจ๊ะ</p>
      <div className="mt-10">
        <img src={markslip} alt="" className="h-96" />
      </div>
      <div className="mt-10">
        <form onSubmit={handleSubmitForm}>
          <p>
            <label>กรอกที่อยู่ที่จะให้จัดส่ง และส่งสลีปที่โอนมา:</label>
          </p>
          <textarea
            rows="4"
            cols="50"
            onChange={e => setAddress(e.target.value)}
          ></textarea>
          <br />
          <input
            type="file"
            ref={inputEl}
            onChange={e => {
              if (e.target.files[0]) {
                setFile(e.target.files[0]);
              }
            }}
          />
          <br />
          <button
            type="submit"
            className="bg-sky-900 w-20 h-10 mt-10 text-zinc-50 rounded-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Paymentpage;
