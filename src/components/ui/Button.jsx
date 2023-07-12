import "../style/App.css";
import "../style/Button.css";
import React from "react";
import PropTypes from "prop-types";

const Button = ({
  id,
  text,
  textSize,
  textAlign,
  textColor,
  fontWeight,
  width,
  height,
  padding,
  // margin,
  color,
  borderRound,
  borderThickness,
  cursor,
  onClick,
}) => {
  const buttonStyle = {
    textAlign: textAlign,
    fontSize: textSize,
    color: textColor,
    fontWeight: fontWeight,
    width: width,
    height: height,
    padding: padding,
    // margin: margin,
    backgroundColor: color,
    borderRadius: borderRound,
    border: borderThickness,
    cursor: cursor,
  };
  return (
    <div
      id={id}
      className="noselect button-17"
      style={buttonStyle}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

Button.defaultProps = {
  id: "btn",
  text: "Click",
  textSize: "15px",
  textAlign: "center",
  textColor: "white",
  fontWeight: "normal",
  width: "9rem",
  height: "3em",
  padding: "3px",
  // margin: "3px",
  color: "steelblue",
  borderRound: "7px",
  borderThickness: "2px",
  cursor: "pointer",
  onClick: () => {
    alert("OMG! You clicked me 😱😱");
  },
};

Button.propTypes = {
  text: PropTypes.string,
  textSize: PropTypes.string,
  textAlign: PropTypes.string,
  textColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  padding: PropTypes.string,
  // margin: PropTypes.string,
  color: PropTypes.string,
  borderRound: PropTypes.string,
  borderThickness: PropTypes.string,
  cursor: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
