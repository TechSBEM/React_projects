import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import { useState } from "react";
import Result from "../src/components/Result.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration > 0

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputIdentifier]: +newValue };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChanges={handleChange} />
      {!inputIsValid && <p className="center">Oops!! Enter a duration greater than zero!!!</p>}
      {inputIsValid && <Result userInput={userInput}  />}
    </>
  );
}

export default App;
