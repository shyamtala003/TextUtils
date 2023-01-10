import { useState } from "react";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import ToastAlert from "./components/ToastAlert";

function App() {
  const [mode, setMode] = useState("light");
  const [showAlert, setShowAlert] = useState(false);
  const [alert, setAlert] = useState(false);

  const setAlertData = (messsage, type) => {
    setShowAlert(true);
    setAlert({ msg: messsage, type: type });

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  const toggleTheme = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#343a40";
      setAlertData("dark mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.background = "white";
      setAlertData("light mode is enabled", "success");
    }
  };

  return (
    <>
      <NavBar title="TextUtils" mode={mode} toggleTheme={toggleTheme}></NavBar>
      <ToastAlert showAlert={showAlert} alertData={alert} />
      <TextForm mode={mode} setAlertData={setAlertData} />
    </>
  );
}

export default App;
