import React from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Input } from "./Components/Input";
import { FetchInfo } from "./Data/Fetch_Info";

function App() {
 return (
  <div className="App">
   <Navbar />
   <div className="header-container">
    <h1 className="main-header">Find out Current Weather Globally!</h1>
   </div>
   <Input />
   <FetchInfo name="Paris" />
   <FetchInfo name="London" />
  </div>
 );
}

export default App;
