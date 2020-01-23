import React from "react";
import HeaderBar from "./components/HeaderBar";
import ContentBox from "./components/ContentBox";
//TODO: import MainContainer
// import MainContainer from "./components/MainContainer/TextCard";
import FooterBar from "./components/FooterBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <ContentBox />
      <FooterBar />
    </div>
  );
}

export default App;
