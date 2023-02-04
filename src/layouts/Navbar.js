import LoginModal from "./LoginModai";
import { useState } from "react";
import RegisterModal from "./RegisterModal";

const Navbar = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  return (
    <>
      <nav className="border-2 flex justify-between">
        <div className="flex items-center py-4 pl-24">
          <i className="fa-solid fa-bars px-6" />
          <h3>MarkMusic Shop</h3>
        </div>
        <div className="flex items-center py-4 pr-24">
          <div className="flex items-center bg-[#d9d9d9] rounded-lg">
            <p className="pr-12 pl-2 py-1 text-black/50 ">ค้นหา</p>
            <i className="fa-solid fa-magnifying-glass pl-12 pr-2 py-2 text-black/50 " />
          </div>
          <i
            className="fa-solid fa-user mx-6 cursor-pointer"
            onClick={() => setOpenLogin(true)}
          />
          <i className="fa-solid fa-cart-shopping cursor-pointer" />
        </div>
      </nav>
      <LoginModal
        show={openLogin}
        setOpenLogin={setOpenLogin}
        setOpenRegister={setOpenRegister}
      />
      <RegisterModal show={openRegister} setOpenRegister={setOpenRegister} />
    </>
  );
};

export default Navbar;
