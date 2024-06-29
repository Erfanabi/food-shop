import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AppLayout.css";

function AppLayout() {
  return (
    <dir>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app">
        <Sidebar />
        <div className="main">
          <Outlet />
        </div>
      </div>
    </dir>
  );
}

export default AppLayout;
