import { useState } from "react";
import { assets, url } from "../../assets/admin_assets/assets";
import axios from "axios";
import "./Add.css";
import { toast } from "react-toastify";

function Add() {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    try {
      const res = await axios.post(`${url}/api/food/add`, formData);
      console.log(res.data);
      toast.success(res.data.message);
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage(null);
    } catch (err) {
      console.log(err);
      toast.error(err.response.data);
    }
  };

  return (
    <div className="add">
      <form className="form flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="input-1">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="upload"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="input-1"
            hidden
            // required
            disabled
          />
        </div>

        <div className="add-product-name flex-col">
          <label htmlFor="input-2">Product name</label>
          <input
            type="text"
            id="input-2"
            name="name"
            placeholder="Type here"
            onChange={onChangeHandler}
            value={data.name}
          />
        </div>

        <div className="add-product-description flex-col">
          <label htmlFor="input-3">Product description</label>
          <textarea
            id="input-3"
            name="description"
            rows="6"
            placeholder="Write content here"
            onChange={onChangeHandler}
            value={data.description}
          ></textarea>
        </div>

        <div className="add-category-price">
          <div className="add-product-category flex-col">
            <label htmlFor="select-1">Product category</label>
            <select
              id="select-1"
              name="category"
              onChange={onChangeHandler}
              value={data.category}
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          <div className="add-product-price flex-col">
            <label htmlFor="input-4">Product-price</label>
            <input
              type="number"
              id="input-4"
              name="price"
              placeholder="$20"
              onChange={onChangeHandler}
              value={data.price}
            />
          </div>
        </div>

        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
}

export default Add;
