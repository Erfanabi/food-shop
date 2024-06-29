import { createContext, useContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";
import axios from "axios";

export const StoreContext = createContext();

export default function StoreProvider({ children }) {
  const url = "https://tomato-api.liara.run";
  // const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const [cartItem, setCartItem] = useState({});
  const [foodList, setFoodList] = useState([]);

  const addToCart = async (id) => {
    if (!cartItem[id]) {
      setCartItem((prev) => ({ ...prev, [id]: 1 }));
    } else if (cartItem[id]) {
      setCartItem((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    }

    if (token) {
      await axios.post(
        url + "/api/cart/add",
        { itemId: id },
        { headers: { token } }
      );
    }
  };

  const removeFromCart = async (id) => {
    if (cartItem[id]) {
      setCartItem((prev) => ({ ...prev, [id]: prev[id] - 1 }));
    }
    if (token) {
      await axios.post(
        url + "/api/cart/remove",
        { itemId: id },
        { headers: { token } }
      );
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      let itemInfo = foodList.find((product) => product._id === item);
      totalAmount = totalAmount + itemInfo.price * cartItem[item];
    }
    return totalAmount;
  };

  const fetchFoodList = async () => {
    const res = await axios.get(`${url}/api/food/list`);

    if (res.data.success) {
      setFoodList(res.data.data);
    }
  };

  const loadCartData = async (token) => {
    const res = await axios.post(
      url + "/api/cart/get",
      {},
      { headers: { token } }
    );

    setCartItem(res.data.cartData);
    await fetchFoodList();
  };

  useEffect(() => {
    console.log(cartItem);
  }, [cartItem]);

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }

    loadData();
  }, []);

  const contextValue = {
    food_list,
    cartItem,
    setCartItem,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
    foodList,
    setFoodList,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
}

export const useStore = () => {
  return useContext(StoreContext);
};
