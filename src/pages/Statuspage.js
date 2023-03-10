import { useEffect } from "react";
import useProduct from "../hooks/useProduct";
import * as OrderApi from "../apis/order-api";
import { useParams } from "react-router-dom";

const Statuspage = () => {
  const { status, admin, setAdmin, setStatus } = useProduct();

  // const { userId } = useParams();

  // console.log(userId);

  const fetchOrder = async () => {
    try {
      const res = await OrderApi.getOrder();
      // console.log(res);
      setAdmin(res.data.order);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  console.log(admin);
  return (
    <div className="m-10 flex flex-col justify-center items-center">
      <div>
        <p>ตรวจสอบสถานะ</p>
        <p>สถานะ pending = รอแอดมินตรวจสอบ</p>
        <p>สถานะ paid = จ่ายเงินเรียบร้อยรอของไปส่ง</p>
        <p>สถานะ reject = บิลมีปัญหารอแอดมินติดต่อไปทางอีเมลล์</p>
      </div>
      <div className="mt-10">
        <p className="text-emerald-400">{admin[0]?.status}</p>
      </div>
      <input type="file" />
    </div>
  );
};

export default Statuspage;
