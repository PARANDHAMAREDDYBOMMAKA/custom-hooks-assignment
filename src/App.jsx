import { useState } from "react";
import "./App.css";
import useStorage from "./Hooks/UseStorage";

function App() {
  const [storage, setStorage] = useStorage();
  const [state, setState] = useState(storage);

  const handleChange = (e) => {
    setStorage(e.target.value);
    setState(e.target.value);
  };

  return (
    <>
      <h1>Learning custom hooks</h1>
      <input
        type="text"
        placeholder="Create a hook"
        style={{ width: "60%", padding: "15px 15px" }}
        onChange={handleChange}
        value={state}
      />
    </>
  );
}

export default App;
