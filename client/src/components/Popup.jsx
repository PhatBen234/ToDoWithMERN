import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { RxCross2 } from "react-icons/rx";
import { baseURL } from "../utils/constant";

const Popup = ({ setShowPopup, popupContent, setUpdateUI }) => {
  const [input, setInput] = useState(popupContent.text);

  const updateToDo = () => {
    axios
      .put(`${baseURL}/update/${popupContent.id}`, { toDo: input })
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setShowPopup(false);
      });
  };

  return (
    <div className="backdrop">
      <div className="popup">
        <RxCross2 className="cross" onClick={() => setShowPopup(false)} />
        <h1>Update ToDo</h1>
        <div className="popup__input_holder">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Update a ToDo..."
          />
          <button onClick={updateToDo}>Update</button>
        </div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  setShowPopup: PropTypes.func.isRequired,
  popupContent: PropTypes.shape({
    text: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
  setUpdateUI: PropTypes.func.isRequired,
};

export default Popup;
