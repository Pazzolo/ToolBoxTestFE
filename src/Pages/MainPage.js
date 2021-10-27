import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import ResultsComponent from "../components/ResultsComponent";

const MainPage = () => {
  const greeting = "Hello Function Component!";

  return (
    <div style={{ backgroundColor: "#f8f9fa", height: "100%", width: "100%", position:"absolute" }}>
      <HeaderComponent />
      <ResultsComponent />
    </div>
  );
};

export default MainPage;
