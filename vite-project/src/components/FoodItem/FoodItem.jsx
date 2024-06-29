import { assets } from "../../assets/frontend_assets/assets";
import { useStore } from "../../context/StoreContext";
import "./FoodItem.css";

const FoodItem = ({ item }) => {
  const { _id, name, image, price, description, category } = item;

  const { cartItem, addToCart, removeFromCart, url } = useStore();

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        {image ? (
          <img
            src={`${url}/images/` + item.image}
            className="food-item-img"
            alt={name}
          />
        ) : (
          <img
            src={assets.noAvalible}
            className="food-item-img-notAvailble"
            alt="noAvailble"
          />
        )}

        {cartItem[_id] > 0 ? (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(_id)}
              src={assets.remove_icon_red}
            />
            <p>{cartItem[_id]}</p>
            <img onClick={() => addToCart(_id)} src={assets.add_icon_green} />
          </div>
        ) : (
          <img
            src={assets.add_icon_white}
            onClick={() => addToCart(_id)}
            className="food-item-img-icon"
          />
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-info-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating-starts" />
        </div>

        <div className="food-item-desc">{description}</div>

        <div className="food-item-price">${price}</div>
      </div>
    </div>
  );
};

export default FoodItem;
