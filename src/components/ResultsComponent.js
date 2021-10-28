import React from "react";

const ResultsComponent = ({ items }) => {
  const rowItem = (item, key) => {
    const { text, palindrome } = item;
    return (
      <div className="row justify-content-md-center" key={key}>
        <div className=" col-md-8">
          <div className="alert alert-secondary">
            {text}
            {palindrome && <span style={{color:"darkmagenta"}}> palindrome</span>}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        width: "50%",
        height: "50%",
        overflowY: "auto",
        backgroundColor: "white",
        margin: "auto",
        marginTop: "3%",
      }}
      className="container"
    >
      <span style={{ marginLeft: "35px", fontSize: "xx-large" }}>Result:</span>
      {items.map((item, index) => {
        return rowItem(item, index);
      })}
    </div>
  );
};

export default ResultsComponent;
