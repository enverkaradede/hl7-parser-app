import React from "react";
import "../style/PageFooter.css";
import { openPopup } from "../utils/windowHelper";

const PageFooter = () => {
  return (
    <footer className="page-footer">
      Developed by{" "}
      <span
        onClick={() =>
          openPopup("https://github.com/enverkaradede/hl7-parser-app")
        }
        style={{ color: "#5590bc", textDecoration: "none", cursor: "pointer" }}
      >
        Enver Karadede
      </span>
    </footer>
  );
};

export default PageFooter;
