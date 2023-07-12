import React from "react";
import PageFooter from "../components/layouts/PageFooter";
import PageHeader from "../components/layouts/PageHeader";
import TextInput from "../components/ui/TextInput";

const Home = () => {
  return (
    <>
      <PageHeader />
      <TextInput
        inputRow="5"
        inputName="hl7-input"
        style={{
          marginTop: "8em",
          marginBottom: "3em",
          padding: "1rem",
          resize: "vertical",
          alignSelf: "center",
        }}
      />
      <PageFooter style={{ marginTop: "auto" }} />
    </>
  );
};

export default Home;
