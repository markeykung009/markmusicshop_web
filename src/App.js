import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "./routes/Router";
import ClipLoader from "react-spinners/ClipLoader";
import useProduct from "./hooks/useProduct";
import { CSSProperties } from "react";

const App = () => {
  const { loading, setLoading } = useProduct();

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <>
      <Router />
      <ToastContainer autoClose="1000" theme="dark" position="top-center" />
      {loading ? (
        <div className="bg-black opacity-50 w-screen h-screen fixed top-0 left-0 z-[100] ">
          <div className="flex justify-center items-center w-full h-full">
            <ClipLoader
              color="#FFFFFF"
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              cssOverride={override}
              data-testid="loader"
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default App;
