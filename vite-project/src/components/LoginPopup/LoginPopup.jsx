import { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { useStore } from "../../context/StoreContext";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import "./LoginPopup.css";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useStore();

  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    let newUrl = url;
    if (currState == "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    try {
      const res = await axios.post(newUrl, data);
      console.log(res.data);

      if (res.data.success) {
        toast.success("user created");
        setToken(res.data.token);
        localStorage.setItem("token", res.data.token);
        setShowLogin(false);
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-popup">
      <div className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            src={assets.cross_icon}
            alt="cross_icon"
            onClick={() => setShowLogin(false)}
          />
        </div>

        <form onSubmit={onSubmitHandler}>
          <div className="login-popup-inputs">
            {currState !== "Login" && (
              <input
                type="text"
                placeholder="Your name"
                name="name"
                value={data.name}
                onChange={onChangeHandler}
                required
              />
            )}
            <input
              type="email"
              placeholder="Your email"
              name="email"
              value={data.email}
              onChange={onChangeHandler}
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={onChangeHandler}
              required
            />
          </div>

          <button type="submit">
            {currState === "Login" ? "Login" : "Create account"}
          </button>

          <div className="login-popup-condition">
            <input type="checkbox" id="box1" required />
            <label htmlFor="box1">
              By continuing, i agree to the terms of use & privacy policy.
            </label>
          </div>
        </form>

        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </div>

      <Toaster />
    </div>
  );
};

export default LoginPopup;
