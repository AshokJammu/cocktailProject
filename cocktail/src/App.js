import React from "react";
import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cocktail from "./components/Cocktail";
// import'../node_modules/bootstrap/dist/css/bootstrap-theme.css';

export default function App() {
  return (
    // <div style={{ backgroundColor: "red" }}>
    <div className="App">
      <div>
        <h1 style={{background:"black",color:"green"}}>COCKTAIL CELEBRATIONS</h1>
        {/* <p style={{background:"black",color:"green"}}>Happy celebrations with tasty cocktails</p> */}
        <Cocktail />
      </div>

    </div>
    // </div>
  );
}
