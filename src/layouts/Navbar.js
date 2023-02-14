import LoginModal from "./LoginModai";
import { useEffect, useState } from "react";
import RegisterModal from "./RegisterModal";
import { Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
import defaultProfileImage from "../assets/blank.png";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useProduct from "../hooks/useProduct";

const Navbar = () => {
  const [openRegister, setOpenRegister] = useState(false);

  const navigate = useNavigate();

  const { authenticatedUser, logout, openLogin, setOpenLogin } = useAuth();
  const { cart, getCartList, setCart } = useProduct();
  const openCart = () => {
    if (authenticatedUser) {
      navigate("/cart");
    } else {
      setOpenLogin(true);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    setCart(cart);
  }, [cart]);

  return (
    <>
      <nav className="border-2 flex justify-between">
        <div className="flex items-center my-4 ml-24">
          <Dropdown
            arrowIcon={false}
            label={<i className="fa-solid fa-bars px-6" />}
            dismissOnClick={false}
            inline={true}
          >
            <Dropdown.Item>
              <Link to={"/"}>Home</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"/shopping"}>shopping</Link>
            </Dropdown.Item>
            {authenticatedUser ? (
              <Dropdown.Item>
                <Link to={`/status`}>status</Link>
              </Dropdown.Item>
            ) : (
              <Dropdown.Item>
                <Link to={"/"}>status</Link>
              </Dropdown.Item>
            )}
          </Dropdown>
          <h3>MarkMusic Shop</h3>
        </div>
        <div className="flex items-center py-4 pr-24">
          {authenticatedUser && authenticatedUser.role === "admin" ? (
            <Link to="/admin">
              <div className="mr-3">admin</div>
            </Link>
          ) : null}
          <div className="flex items-center bg-[#d9d9d9] rounded-lg">
            <p className="pr-12 pl-2 py-1 text-black/50 ">ค้นหา</p>
            <i className="fa-solid fa-magnifying-glass pl-12 pr-2 py-2 text-black/50 " />
          </div>
          {authenticatedUser ? (
            <Dropdown
              arrowIcon={false}
              label={
                <img
                  src={defaultProfileImage}
                  alt="defaultProfileImage"
                  className="w-[30px] h-[30px] rounded-full mx-6"
                />
              }
              dismissOnClick={false}
              inline={true}
            >
              <Dropdown.Item>
                <Link to={"/"}>Edit Profile</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <button onClick={handleLogout}>Logout</button>
              </Dropdown.Item>
            </Dropdown>
          ) : (
            <i
              className="fa-solid fa-user mx-6 cursor-pointer"
              onClick={() => setOpenLogin(true)}
            />
          )}
          <div onClick={openCart} className="relative">
            <i className="fa-solid fa-cart-shopping cursor-pointer" />
            {cart.length === 0 || !authenticatedUser ? null : (
              <div className="bg-red-600 w-5 h-5 rounded-full absolute text-center text-white left-2 bottom-3">
                {cart.length}
              </div>
            )}
          </div>
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
