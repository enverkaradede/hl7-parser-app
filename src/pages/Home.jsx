import React from "react";
import { renderToString } from "react-dom/server";
import PageFooter from "../components/layouts/PageFooter";
import PageHeader from "../components/layouts/PageHeader";
import TextInput from "../components/ui/TextInput";
import Button from "../components/ui/Button";
import { useHL7Splitter } from "../hooks/useHL7Splitter";
import Table from "../components/ui/Table";
import { openUrlPopup } from "../utils/electron/windowHelper";

const Home = () => {
  const { splitMessageArr } = useHL7Splitter();
  return (
    <>
      <PageHeader />
      <TextInput
        inputRow="5"
        inputName="hl7-input"
        style={{
          marginTop: "8em",
          marginBottom: "2em",
          padding: "1rem",
          resize: "vertical",
          alignSelf: "center",
          fontWeight: "500",
          fontSize: "small",
          lineHeight: "1.3rem",
        }}
      />
      <Table data={splitMessageArr} />
      <Button
        text="Open in Separate Window"
        style={{ alignSelf: "center" }}
        onClick={() => {
          console.log(splitMessageArr);
          splitMessageArr.length === 0
            ? alert("Nothing to show. Please enter a valid HL7 message first.")
            : openUrlPopup(
                renderToString(<Table data={splitMessageArr} />).replace(
                  "#",
                  "&num;"
                )
              );
        }}
      />
      <PageFooter style={{ marginTop: "auto" }} />
    </>
  );
};

export default Home;
