import React from "react";
import { useState } from "react";
import Homepage from "./components/Homepage";
import EmployeePage from "./components/EmployeePage";

function App() {
  return (
    <div className="App">
      <Homepage></Homepage>
      <EmployeePage></EmployeePage>
    </div>
  );
}

export default App;
