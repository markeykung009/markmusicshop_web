import { useEffect } from "react";
import useProduct from "../hooks/useProduct";
import * as OrderApi from "../apis/order-api";
import { useParams } from "react-router-dom";

const Statuspage = () => {
  const { status, admin, setAdmin, setStatus } = useProduct();

  // const { userId } = useParams();

  // console.log(userId);

  // const fetchStatus = async () => {
  //   try {
  //     const res = await OrderApi.getStatus(userId);
  //     // console.log(res);
  //     setStatus(res.data.order);
  //     console.log(res.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   fetchStatus();
  // }, []);
  return (
    <div className="m-10 flex flex-col justify-center items-center">
      <div>
        <p>ตรวจสอบสถานะ</p>
        <p>สถานะ pending = รอแอดมินตรวจสอบ</p>
        <p>สถานะ paid = จ่ายเงินเรียบร้อยรอของไปส่ง</p>
        <p>สถานะ reject = บิลมีปัญหารอแอดมินติดต่อไปทางอีเมลล์</p>
      </div>
      <div className="mt-10">
        <p className="text-emerald-400">{status}</p>
        <button className="bg-sky-900 w-20 h-10 mt-10 text-zinc-50 rounded-full">
          Check
        </button>
      </div>
    </div>
  );
};

export default Statuspage;
