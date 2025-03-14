import React from "react";
import { useNavigate } from "react-router-dom";
import foodMenu from "./data";
function Home() {
  const navigate = useNavigate();
  // class Home extends Component {
  //   render() {
  const handleRowClick = (rowData) => {
    console.log("---------", rowData);
    navigate("/detail", { state: { rowData } });
  };
  return (
    <React.Fragment>
      <table className="table" style={{ color: "yellow" }}>
        <thead>
          <tr>
            <th>Food Item</th>
            <th>Item Price</th>
            <th>Category</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {foodMenu.map((foodItem) => {
            return (
              <tr key={foodItem.id} onClick={() => handleRowClick(foodItem)}>
                <td>{foodItem.foodItem}</td>
                <td>{foodItem.itemPrice}</td>
                <td>{foodItem.category}</td>
                <td>{foodItem.type}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
}
export default Home;
