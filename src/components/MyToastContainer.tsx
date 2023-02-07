import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const MyToastContainer = () => {
  return <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
  />
};

export default MyToastContainer;
