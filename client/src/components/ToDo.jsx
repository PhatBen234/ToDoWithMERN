import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { AiFillEdit } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { baseURL } from "../utils/constant";

const ToDo = ({ text, id, setUpdateUI, setShowPopup, setPopupContent }) => {
  const deleteTodo = () => {
    axios.delete(`${baseURL}/delete/${id}`).then((res) => {
      console.log(res.data);
      setUpdateUI((prevState) => !prevState);
    });
  };

  const updateToDo = () => {
    setPopupContent({ text, id });
    setShowPopup(true);
  };

  return (
    <div className="toDo">
      {text}
      <div className="icons">
        <AiFillEdit className="icon" onClick={updateToDo} />
        <RxCross2 className="icon" onClick={deleteTodo} />
      </div>
    </div>
  );
};

ToDo.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setUpdateUI: PropTypes.func.isRequired,
  setShowPopup: PropTypes.func.isRequired,
  setPopupContent: PropTypes.func.isRequired,
};

export default ToDo;
