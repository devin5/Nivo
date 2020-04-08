import React from 'react';
import './App.css';
import {data} from "./data/respoonsivePie"
import MyResponsivePie from "./components/ResponsivePie.js"

function App() {
  return (
    <div className="App">
    <MyResponsivePie data={data}/>

    </div>
  );
}

export default App;
