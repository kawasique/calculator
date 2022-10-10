import "./App.css";

import React, { useState } from "react";
import Input from "./components/Input";
import Output from "./components/Output";
import Controls from "./components/Controls";

function App() {
  const [history, setHistory] = useState([]);
  const [prevInput, setPrevInput] = useState("");
  const [operation, setOperation] = useState("");
  const [inputString, setInputString] = useState("0");

  function inputCallback(value) {
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
    const operators = ["%", "÷", "×", "+", "-"];

    let temp = "";
    let result = "0";

    if (inputString == "Error" || value == "C") {
      setPrevInput("");
      setOperation("");
      setInputString("0");

      return;
    }

    if (numbers.includes(value)) {
      if (inputString.length > 16) return;
      if (value == "." && inputString.indexOf(".") != -1) return;

      if (inputString == "0") {
        setInputString(value);
        return;
      }

      setInputString(inputString + value);
      return;
    }
    if (value == "<") {
      let tmp = inputString.slice(0, -1);
      setInputString(tmp ? tmp : "0");
      return;
    }
    if (value == "CE") {
      setInputString("0");
      return;
    }
    if (operators.includes(value)) {
      setPrevInput(inputString);
      setOperation(value);
      setInputString("0");
      return;
    }

    if (value == "√") {
      temp = "sqrt(" + inputString + ")";
      result = Math.sqrt(inputString);
    } else if (value == "1/x") {
      temp = "1/(" + inputString + ")";
      result = 1 / Number(inputString);
    } else if (value == "x²") {
      temp = "(" + inputString + ")^2";
      result = Math.pow(Number(inputString), 2);
    } else if (value == "=") {
      temp = prevInput + operation + inputString;

      if (operation == "+") {
        result = Number(prevInput) + Number(inputString);
      } else if (operation == "-") {
        result = Number(prevInput) - Number(inputString);
      } else if (operation == "×") {
        result = Number(prevInput) * Number(inputString);
      } else if (operation == "÷") {
        result = Number(prevInput) / Number(inputString);
      } else {
        result = "0";
        temp = "";
      }
    }
    setInputString(result);
    setPrevInput(temp);
    setOperation("");
    if (temp) {
      history.push(temp + result);
      console.log(temp + "=" + result);
    }
  }

  return (
    <div className="App">
      <Controls />
      <Output prev={prevInput} op={operation} current={inputString} />
      <Input callback={inputCallback} />
    </div>
  );
}

export default App;
