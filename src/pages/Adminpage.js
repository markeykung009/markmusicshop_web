import { useEffect, useState } from "react";
import * as OrderApi from "../apis/order-api";
import useProduct from "../hooks/useProduct";

const Adminpage = () => {
  const { status, setStatus, admin, setAdmin } = useProduct();

  const fetchOrder = async () => {
    try {
      const res = await OrderApi.getOrder();
      // console.log(res);
      setAdmin(res.data.order);
    } catch (err) {
      console.log(err);
    }
  };

  const handleApprove = async (id, status) => {
    try {
      const res = await OrderApi.updateStatus(id, status);
      console.log(res);
      fetchOrder();
      setStatus("paid");
    } catch (err) {
      console.log(err);
    }
  };
  const handleReject = async (id, status) => {
    try {
      const res = await OrderApi.updateStatus(id, status);
      console.log(res);
      fetchOrder();
      setStatus("reject");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <div className="m-10 flex flex-col ">
      <div className="text-center">
        <p>Gu Admin</p>
      </div>
      {admin.map((el, idx) => (
        <div
          className="flex justify-around mt-10 border-2 items-center"
          key={idx}
        >
          <div className="">
            <p>id user</p>
            <p>{el.id}</p>
          </div>
          <div className="">
            <p>slip image</p>
            <p>{el.transactionImg}</p>
          </div>
          <div className="">
            <p>total price</p>
            <p>{el.totalPrice}</p>
          </div>
          <div className="">
            <p>status</p>
            <p>{el.status}</p>
          </div>
          <div className="">
            <p>address</p>
            <p>{el.address}</p>
          </div>
          <button
            className="bg-sky-900 w-20 h-10  text-zinc-50 rounded-full"
            onClick={() => {
              handleApprove(el.id, "paid");
            }}
          >
            Approve
          </button>
          <button
            className="bg-sky-900 w-20 h-10  text-zinc-50 rounded-full"
            onClick={() => {
              handleReject(el.id, "reject");
            }}
          >
            Reject
          </button>
        </div>
      ))}
    </div>
  );
};

export default Adminpage;
