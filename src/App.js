import React from "react";
import HeaderBar from "./components/HeaderBar";
import MainContainer from "./components/MainContainer/MainContainer";
import FooterBar from "./components/FooterBar";
import styled from "styled-components";
import "./App.css";

const AppContainer = styled.div`
  max-width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <AppContainer className="App">
      <HeaderBar />
      <MainContainer />
      <FooterBar />
    </AppContainer>
  );
}

export default App;
