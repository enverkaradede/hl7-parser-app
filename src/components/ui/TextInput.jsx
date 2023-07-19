import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../style/ui/TextInput.css";
import { setHl7Text } from "../../utils/store/slicers/Hl7MessageSlicer";

const TextInput = ({ inputRow = "1", inputColumn, inputName, style }) => {
  //TODO: Relocate the dispatch and textHandler functions here to create more generic TextInput component

  const hl7Message = useSelector((state) => state.hl7.message);
  const dispatch = useDispatch();

  const textHandler = (e) => {
    dispatch(setHl7Text(e.target.value));
  };

  return (
    <>
      {inputRow === "1" ? (
        <input
          type="text"
          name={inputName || "defaultInput"}
          id={inputName || "defaultInput"}
          onChange={textHandler}
          value={hl7Message}
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
          value={hl7Message}
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
