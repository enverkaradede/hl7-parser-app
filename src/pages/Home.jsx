import React from "react";
import PageFooter from "../components/layouts/PageFooter";
import PageHeader from "../components/layouts/PageHeader";
import TextInput from "../components/ui/TextInput";
import { useHL7Splitter } from "../hooks/useHL7Splitter";
import Table from "../components/ui/Table";
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
      {hl7Message === "" ? (
        <></>
      ) : (
        <>
          <Table
            messageType={hl7MessageType}
            data={splitMessageArr}
            content={tableDataHtml}
            message={hl7Message}
          />
        </>
      )}
      <PageFooter style={{ marginTop: "auto" }} />
    </>
  );
};

export default Home;
