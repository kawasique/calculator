import iconBeaker from "./icon-beaker.svg";
import iconCopy from "./icon-copy.svg";
import iconDelete from "./icon-delete.svg";
import iconGear from "./icon-gear.svg";
import iconHistory from "./icon-history.svg";

import "./App.css";

import React from "react";

function ControlButton({ className = "", value, ...props }) {
  return <button className={"controls-button " + className}>{value}</button>;
}

function Controls() {
  return (
    <div className="controls">
      <ControlButton
        className="controls-settings"
        value={<img src={iconGear} />}
      />
      <span>Calculator</span>
      <ControlButton className="controls-history" value={<img src={iconHistory} />}/>
      <ControlButton className="controls-copy" value={<img src={iconCopy} />} />
    </div>
  );
}

function InputButton({ value, callback, className = "", ...props }) {
  return <button className={"input-button " + className}>{value}</button>;
}

function Output() {
  return (
    <div className="output">
      <p>1234 -</p>
      <p>321</p>
    </div>
  );
}

function Input() {
  return (
    <div className="input">
      <InputButton value="%" className="fn-button" />
      <InputButton value="C" className="fn-button" />
      <InputButton value="CE" className="fn-button" />
      <InputButton value="<" className="fn-button" />

      <InputButton value="1/x" className="fn-button" />
      <InputButton value="x²" className="fn-button" />
      <InputButton value="√" className="fn-button" />
      <InputButton value="÷" className="fn-button" />

      <InputButton value="7" />
      <InputButton value="8" />
      <InputButton value="9" />
      <InputButton value="×" className="fn-button" />

      <InputButton value="4" />
      <InputButton value="5" />
      <InputButton value="6" />
      <InputButton value="-" className="fn-button" />

      <InputButton value="1" />
      <InputButton value="2" />
      <InputButton value="3" />
      <InputButton value="+" className="fn-button" />

      <InputButton value="±" />
      <InputButton value="0" />
      <InputButton value="," />
      <InputButton value="=" className="fn-button eq-button" />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Controls />
      <Output />
      <Input />
    </div>
  );
}

export default App;
