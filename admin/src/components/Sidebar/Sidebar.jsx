import { NavLink } from "react-router-dom";
import { assets } from "../../assets/admin_assets/assets";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="add" className="sidebar-link">
          <img src={assets.add_icon} alt="add-icon" />
          <p>Add Item</p>
        </NavLink>
        <NavLink to="list" className="sidebar-link">
          <img src={assets.order_icon} alt="order-icon" />
          <p>List Item</p>
        </NavLink>
        <NavLink to="orders" className="sidebar-link">
          <img src={assets.order_icon} alt="order-icon" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
