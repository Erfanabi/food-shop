import { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import { useStore } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ setShowLogin }) => {
  const { getTotalCartAmount, token, setToken } = useStore();
  console.log(token);

  const [menu, setMenu] = useState("home");
  const menuItem = [
    { nav: "home", link: "/" },
    { nav: "menu", link: "#explore-menu" },
    { nav: "mobile", link: "#app-download" },
    { nav: "cantact", link: "#footer" },
  ];

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="logo" />
      </Link>

      <ul className="navbar-menu">
        {menuItem.map((item) => {
          return (
            <a href={item.link} key={item.nav}>
              <li
                onClick={() => setMenu(item.nav)}
                className={menu === item.nav ? "active" : ""}
              >
                {item.nav}
              </li>
            </a>
          );
        })}
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />
        <Link to="/cart" className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          {getTotalCartAmount() ? <div className="dot"></div> : null}
        </Link>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="navbar-profile-dropdown">
              <li>
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</li>
        <li onClick={()=>setMenu("mobile")} className={menu==="mobile"?"active":""}>mobile-app</li>
        <li onClick={()=>setMenu("cantact")} className={menu==="cantact"?"active":""}>cantact us</li>
      </ul> */
}
