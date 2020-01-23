import React from "react";
import HeaderBar from "./components/HeaderBar";
import ContentBox from "./components/ContentBox";
//TODO: import MainContainer
import MainContainer from "./components/MainContainer/MainContainer";
import FooterBar from "./components/FooterBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <MainContainer />
      <FooterBar />
    </div>
  );
}

export default App;
