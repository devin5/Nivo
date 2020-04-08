import React from "react";
import "./App.css";
import { data } from "./data/respoonsivePie";
import MyResponsivePie from "./components/ResponsivePie.js";
import { MyResponsiveAreaBump } from "./components/Chart";
import { MyResponsiveChord } from "./components/Chord";
import { MyResponsiveBar } from "./components/Bar";

function App() {
  return (
    <div className="App">
      <div className="container">
        <MyResponsivePie data={data} />
        <MyResponsiveChord />
      </div>
      <MyResponsiveAreaBump />
      <MyResponsiveBar />
    </div>
  );
}

export default App;
