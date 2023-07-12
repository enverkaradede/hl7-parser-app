import "./style/App.css";
import PageFooter from "./components/PageFooter";
import PageHeader from "./components/PageHeader";
import TextInput from "./components/TextInput";

const App = () => {
  return (
    <div className="App">
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
    </div>
  );
};

export default App;
