import React from "react";
import PageFooter from "../components/layouts/PageFooter";
import PageHeader from "../components/layouts/PageHeader";
import TextInput from "../components/ui/TextInput";
import Button from "../components/ui/Button";
import { useHL7Splitter } from "../hooks/useHL7Splitter";
import Table from "../components/ui/Table";
import { openUrlPopup } from "../utils/electron/windowHelper";
import { useTableData } from "../hooks/useTableDataHtml";
import { useSelector } from "react-redux";

const Home = () => {
  const hl7Message = useSelector((state) => state.hl7.message);
  const hl7MessageType = useSelector((state) => state.hl7.messageType);
  const { splitMessageArr } = useHL7Splitter();
  const { tableDataHtml } = useTableData(
    <Table messageType={hl7MessageType} data={splitMessageArr} />
  );

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
      <Table messageType={hl7MessageType} data={splitMessageArr} />
      <Button
        text="Open in Separate Window"
        style={{ alignSelf: "center" }}
        onClick={() => {
          splitMessageArr.length === 0
            ? alert("Nothing to show. Please enter a valid HL7 message first.")
            : openUrlPopup({
                message: hl7Message,
                messageType: hl7MessageType,
                content: tableDataHtml,
              });
        }}
      />
      <PageFooter style={{ marginTop: "auto" }} />
    </>
  );
};

export default Home;
