import { useState } from "react";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const toggleTheme = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#343a40";
    } else {
      setMode("light");
      document.body.style.background = "white";
    }
  };

  return (
    <>
      <NavBar title="TextUtils" mode={mode} toggleTheme={toggleTheme}></NavBar>
      <TextForm mode={mode} />
    </>
  );
}

export default App;
