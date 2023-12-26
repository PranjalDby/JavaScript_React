import { useState } from "react";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";

function App() {
  // State hook
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert
          onClose={() => {
            setAlertVisibility(false);
          }}
        >
          Pranjal's World{" "}
        </Alert>
      )}

      <Buttons
        name="Submit"
        onclick={() => {
          console.log("Handled Listner from App.tsx");
          setAlertVisibility(true);
        }}
        color="danger"
      ></Buttons>
    </div>
  );
}

export default App;
