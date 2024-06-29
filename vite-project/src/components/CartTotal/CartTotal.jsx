import { useStore } from "../../context/StoreContext";

function CartTotal({ children }) {
  const { getTotalCartAmount } = useStore();

  return (
    <div className="cart-total">
      <h2>Cart Total</h2>
      <div>
        <div className="cart-total-details">
          <p>Subtotal</p>
          <p>${getTotalCartAmount()}</p>
        </div>

        <hr />

        <div className="cart-total-details">
          <p>Delivery Fee</p>
          <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
        </div>

        <hr />

        <div className="cart-total-details">
          <p>Total</p>
          <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

export default CartTotal;
