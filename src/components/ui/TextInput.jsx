import React from "react";
import { useDispatch } from "react-redux";
import "../../style/ui/TextInput.css";
import { getHl7Text } from "../../utils/slicers/Hl7MessageSlicer";

const TextInput = ({ inputRow = "1", inputColumn, inputName, style }) => {
  const dispatch = useDispatch();

  const textHandler = (e) => {
    dispatch(getHl7Text(e.target.value));
  };

  return (
    <>
      {inputRow === "1" ? (
        <input
          type="text"
          name={inputName || "defaultInput"}
          id={inputName || "defaultInput"}
          onChange={textHandler}
          className="text-input"
          style={style || {}}
        />
      ) : (
        <textarea
          rows={inputRow}
          cols={inputColumn || "20"}
          name={inputName || "defaultInput"}
          id={inputName || "defaultInput"}
          onChange={textHandler}
          className="text-input"
          style={
            { ...{ height: "200px", resize: "none" }, ...style } || {
              height: "200px",
              resize: "none",
              marginTop: "5em",
            }
          }
        />
      )}
    </>
  );
};

export default TextInput;
