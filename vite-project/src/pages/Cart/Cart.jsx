import { useStore } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import CartTotal from "../../components/CartTotal/CartTotal";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const { food_list, foodList, cartItem, removeFromCart, url } = useStore();

  return (
    <div className="cart">
      <div className="cart-item">
        <div className="card-items-title card-items-header">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <br />
        <hr />

        {foodList.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <div key={index}>
                <div className="card-items-title card-items-item">
                  <img src={`${url}/images/` + item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>${item.price * cartItem[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>

      <div className="cart-bottom">
        <CartTotal>
          <button onClick={() => navigate("/order")}>
            PROCEED TO CHECKOUT
          </button>
        </CartTotal>

        <div className="cart-promocode">
          <p>if you have a prone code, Enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

// if(cartItem[item._id]>0){}
