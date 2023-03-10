// import { Modal } from "flowbite-react";
// import { useEffect, useState } from "react";
// import * as productApi from "../apis/product-api";
// import Card from "../components/Card";
// import fenderLogo from "../assets/fenderlogo.svg";

// const SearchModal = ({ openSearch, setOpenSearch }) => {
//   const [product, setProduct] = useState([]);

//   const fetch = async () => {
//     try {
//       const res = await productApi.getAllProduct();
//       setProduct(res.data.product);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetch();
//   }, []);
//   return (
//     <>
//       <Modal show={false} onClose={() => setOpenSearch(false)} size="100vw">
//         <Modal.Header className="">
//           <div className="flex items-center bg-[#d9d9d9] rounded-lg ">
//             <input
//               type="text"
//               placeholder="ค้นหา"
//               className="bg-[#d9d9d9] border-none rounded-lg "
//             />
//             <i className="fa-solid fa-magnifying-glass pl-12 pr-2 py-2 text-black/50 " />
//           </div>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="flex items-center bg-[#d9d9d9] rounded-lg ">
//             <input
//               type="text"
//               placeholder="ค้นหา"
//               className="bg-[#d9d9d9] border-none rounded-lg "
//             />
//             <i className="fa-solid fa-magnifying-glass pl-12 pr-2 py-2 text-black/50 " />
//           </div>
//           <div className="flex flex-wrap justify-center gap-5 mt-5">
//             {product.map((el, idx) => {
//               console.log("kuy", el.id);
//               return (
//                 <Card
//                   productId={el.id}
//                   productPicture={true ? el.productImage : fenderLogo}
//                   productName={el.title}
//                   productPrice={el.price + " บาท"}
//                   soldOut="ขายแล้ว 2"
//                   time={true}
//                   key={idx}
//                 />
//               );
//             })}
//           </div>
//         </Modal.Body>
//         <Modal.Footer></Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default SearchModal;
