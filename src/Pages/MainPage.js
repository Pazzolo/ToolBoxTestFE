import React, { useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import ResultsComponent from "../components/ResultsComponent";

const MainPage = () => {
  const [items, setItems] = useState([]);
  const addItems = ({ newItem }) => {
    var currentList = items.slice();
    currentList.unshift(newItem);
    setItems(currentList);
  };
  return (
    <div
      style={{
        backgroundColor: "#edeef0",
        height: "100%",
        width: "100%",
        position: "absolute",
      }}
    >
      <HeaderComponent addItems={addItems} />
      <ResultsComponent items={items} />
    </div>
  );
};

export default MainPage;
