import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/buttons";
import Display from "./components/display";

function App() {
  const [value, setValue] = useState("");

  const handleclick = (val) => {
    evaluate(val);
  };

  const evaluate = (val) => {
    if (val == "=") {
      let displayvalue = eval(value);
      setValue(displayvalue);
    } else {
      let displayvalue = value + val;
      setValue(displayvalue);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h4>A very basic Calculator</h4>
      <div style={{ display: "flex", flex: 1, justifyContent: "center" }}>
        <div style={{ width: 250, backgroundColor: "aliceblue", padding: 20 }}>
          <Display
            containerStyle={{
              padding: 20,
              margin: 10,
              backgroundColor: "black",
              color: "white",
            }}
            value={value}
          />

          <div>
            <Button
              label={"9"}
              onClick={handleclick}
              style={{ padding: 10, margin: 10 }}
            />
            <Button
              label={"8"}
              onClick={handleclick}
              style={{ padding: 10, margin: 10 }}
            />
            <Button
              label={"7"}
              onClick={handleclick}
              style={{ padding: 10, margin: 10 }}
            />
            <Button
              label={"+"}
              onClick={handleclick}
              style={{ padding: 10, margin: 10 }}
            />
          </div>

          <div>
            <Button
              label={"6"}
              onClick={handleclick}
              style={{ padding: 10, margin: 10 }}
            />
            <Button
              label={"5"}
              onClick={handleclick}
              style={{ padding: 10, margin: 10 }}
            />
            <Button
              label={"4"}
              onClick={handleclick}
              style={{ padding: 10, margin: 10 }}
            />
            <Button
              label={"-"}
              onClick={handleclick}
              style={{ padding: 10, margin: 10 }}
            />
          </div>
          <div>
            <Button
              label={"3"}
              onClick={handleclick}
              style={{ padding: 10, margin: 10 }}
            />
            <Button
              label={"2"}
              onClick={handleclick}
              style={{ padding: 10, margin: 10 }}
            />
            <Button
              label={"1"}
              onClick={handleclick}
              style={{ padding: 10, margin: 10 }}
            />
            <Button
              label={"/"}
              onClick={handleclick}
              style={{ padding: 10, margin: 10 }}
            />
          </div>
          <div>
            <Button
              label={"."}
              onClick={handleclick}
              style={{ padding: 10, margin: 10 }}
            />
            <Button
              label={"0"}
              onClick={handleclick}
              style={{ padding: 10, margin: 10 }}
            />
            <Button
              label={"="}
              onClick={handleclick}
              style={{ padding: 10, margin: 10 }}
            />
            <Button
              label={"*"}
              onClick={handleclick}
              style={{ padding: 10, margin: 10 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
