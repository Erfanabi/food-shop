import { useEffect, useState } from "react";
import { url } from "../../assets/admin_assets/assets";
import { toast } from "react-toastify";
import axios from "axios";
import "./List.css";

function List() {
  const [list, setList] = useState([]);
  console.log(list);

  const fetchList = async () => {
    try {
      const res = await axios.get(`${url}/api/food/list`);
      if (res.data.success) {
        setList(res.data.data);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const removeFood = async (id) => {
    try {
      const res = await axios.post(`${url}/api/food/remove`, { id });
      if (res.data.success) {
        toast.success(res.data.message);
        await fetchList();
      } else {
        toast.error(res.data.message);
      }
      console.log(res.data);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format list-table-header">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>

        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format list-table-item">
              <img src={`${url}/images/` + item.image} />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{item.category}</p>
              <p className="cross" onClick={() => removeFood(item._id)}>
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;
