import { useStore } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";

const FoodDisplay = ({ category }) => {
  const { food_list, foodList } = useStore();

  console.log(foodList);

  return (
    <div className="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {foodList.map((item, index) => {
          if (category === "all" || category === item.category) {
            return <FoodItem item={item} key={index} />;
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;

// const foodListFilter = food_list.filter((item) => item.category === category);
