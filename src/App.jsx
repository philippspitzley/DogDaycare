import { useState, useEffect } from "react";
import "./App.css";
import Dogs from "./components/Dogs";
import TextInput from "./components/TextInput";

function App() {
  const [dogs, setDogs] = useState(() => requestLocalStorage());
  const [showDogs, setShowDogs] = useState(true);
  const [inputValue, setInputValue] = useState("");
  console.log("dogs", dogs);

  function requestLocalStorage() {
    console.log("requrest");
    const saved = localStorage.getItem("dogs");
    return saved ? JSON.parse(saved) : [];
  }

  useEffect(() => {
    localStorage.setItem("dogs", JSON.stringify(dogs));
    console.log("store dogs in local storage");
    console.log(localStorage.getItem("dogs"));
  }, [dogs]);

  function toggleShowDogs() {
    setShowDogs((prev) => !prev);
  }

  return (
    <main>
      <h1>Dog Daycare</h1>
      <TextInput
        value={inputValue}
        setValue={setInputValue}
        setDogs={setDogs}
      />
      <button onClick={toggleShowDogs}>Show Dogs</button>
      {showDogs && <Dogs dogs={dogs} />}
    </main>
  );
}

export default App;
