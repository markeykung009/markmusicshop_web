import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import useProduct from "../hooks/useProduct";

const LoginModal = ({ show, setOpenLogin, setOpenRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getCartList } = useProduct();

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [show]);

  const { login, authenticatedUser } = useAuth();

  useEffect(() => {
    getCartList();
  }, [authenticatedUser]);

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      await login(email, password);
      setOpenLogin(false);
      toast.success("success login");
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };

  return (
    <>
      <Modal
        show={show}
        size="md"
        popup={true}
        onClose={() => setOpenLogin(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={handleSubmitForm}>
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Login
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput
                  id="email"
                  placeholder="กรอกอีเมล์"
                  required={true}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Your password" />
                </div>
                <TextInput
                  id="password"
                  placeholder="กรอกพาสเวิร์ด"
                  type="password"
                  required={true}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Remember me</Label>
                </div>
              </div>
              <div className="w-full">
                <Button type="submit">Login</Button>
              </div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?{" "}
                <a
                  href=" "
                  className="text-blue-700 hover:underline dark:text-blue-500"
                  onClick={e => {
                    e.preventDefault();
                    setOpenLogin(false);
                    setOpenRegister(true);
                  }}
                >
                  Create account
                </a>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginModal;
