import { Button, Label, Modal, TextInput } from "flowbite-react";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import * as authApi from "../apis/auth-api";

const initialInput = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterModal = ({ show, setOpenRegister }) => {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setInput(initialInput);
  }, [show]);

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      const result = input;

      if (!result) {
        setError(result);
      } else {
        setError({});
        input.role = "user";
        await authApi.register(input);
        console.log("kuy");
        setInput(initialInput);
        setOpenRegister(false);
        toast.success("success register. please login to continue.");
      }
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
        onClose={() => setOpenRegister(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={handleSubmitForm}>
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Create Account
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="firstName" value="Your firstName" />
                </div>
                <TextInput
                  id="firstName"
                  placeholder="กรอกชื่อ"
                  required={true}
                  name="firstName"
                  value={input.firstName}
                  onChange={handleChangeInput}
                  error={error.firstName}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="lastName" value="Your lastName" />
                </div>
                <TextInput
                  id="lastName"
                  placeholder="กรอกนามสกุล"
                  required={true}
                  name="lastName"
                  value={input.lastName}
                  onChange={handleChangeInput}
                  error={error.lastName}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput
                  id="email"
                  placeholder="กรอกอีเมล์"
                  required={true}
                  name="email"
                  value={input.email}
                  onChange={handleChangeInput}
                  error={error.email}
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
                  name="password"
                  value={input.password}
                  onChange={handleChangeInput}
                  error={error.password}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="confirmPassword"
                    value="Your confirmPassword"
                  />
                </div>
                <TextInput
                  id="confirmPassword"
                  placeholder="ยืนยันพาสเวิร์ด"
                  type="password"
                  required={true}
                  name="confirmPassword"
                  value={input.confirmPassword}
                  onChange={handleChangeInput}
                  error={error.confirmPassword}
                />
              </div>

              <div className="w-full">
                <Button type="submit">Sign Up</Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RegisterModal;
