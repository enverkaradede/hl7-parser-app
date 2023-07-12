import React from "react";
import "../style/TextInput.css";

const TextInput = ({
  inputRow = "1",
  inputColumn,
  inputName,
  textValue,
  setTextValue,
  style,
}) => {
  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };

  return (
    <>
      {inputRow === "1" ? (
        <input
          type="text"
          name={inputName || "defaultInput"}
          id={inputName || "defaultInput"}
          onChange={handleTextChange}
          className="text-input"
          style={style || {}}
        />
      ) : (
        <textarea
          rows={inputRow}
          cols={inputColumn || "20"}
          name={inputName || "defaultInput"}
          id={inputName || "defaultInput"}
          onChange={handleTextChange}
          className="text-input"
          style={{
            margin: "3em",
            height: "200px",
            resize: "none",
            marginTop: "5em",
          }}
        />
      )}
    </>
  );
};

export default TextInput;
