import React, { useState } from "react";
// class CheckOut extends Component {
function CheckOut() {
  const [message, setMessage] = useState("");
  const handleSubmit = () => {
    setMessage("Your food is getting ready!!");
  };
  return (
    <React.Fragment>
      <button
        className="btn btn-outline-success mt-7 checkout"
        onClick={handleSubmit}
      >
        Check Out
      </button>
      {message && (
        <div className="alert alert-success mt-3" role="alert">
          {message}
        </div>
      )}
    </React.Fragment>
  );
}
export default CheckOut;
