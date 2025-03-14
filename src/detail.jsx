import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
function Detail() {
  // class Detail extends Component {
  //   render() {
  const location = useLocation();
  const navigate = useNavigate();
  const { rowData } = location.state || {}; // Safely access the data
  const handleProceed = () => {
    navigate("/checkout");
  };
  return (
    <React.Fragment>
      <form className="">
        <div className="mb-3 mt-5">
          <div className="row">
            <div className="col position-relative labelalignment">
              <label for="foodItem" className="form-label">
                Food Item
              </label>
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control w-50"
                id="foodItem"
                width="40%"
                placeholder=""
                value={rowData.foodItem}
              ></input>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <div className="row">
            <div className="col position-relative  labelalignment">
              <label for="itemPrice" className="form-label">
                Item Price
              </label>
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control w-50"
                id="itemPrice"
                placeholder=""
                value={rowData.itemPrice}
              ></input>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <div className="row">
            <div className="col  position-relative  labelalignment">
              <label for="category" className="form-label">
                Category
              </label>
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control w-50"
                id="category"
                placeholder=""
                value={rowData.category}
              ></input>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <div className="row">
            <div className="col  position-relative  labelalignment">
              <label for="type" className="form-label">
                Type
              </label>
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control w-50"
                id="type"
                placeholder=""
                value={rowData.type}
              ></input>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <div className="row">
            <div className="col  position-relative  labelalignment">
              <label for="type" className="form-label">
                Est Time
              </label>
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control w-50"
                id="type"
                placeholder=""
                value={rowData.estTime}
              ></input>
            </div>
          </div>
        </div>

        {/* <div className="mb-3">
            <label for="estTime" className="form-label">Est Time</label>
            <input type="text" className="form-control" id="estTime" placeholder=""></input>
        </div> */}
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={handleProceed}
        >
          Processed
        </button>
      </form>
    </React.Fragment>
  );
}
// }
export default Detail;
