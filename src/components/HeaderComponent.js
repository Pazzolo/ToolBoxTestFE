import React from "react";
import { getData } from "../services/connection";

const HeaderComponent = ({ addItems }) => {
  const submitForm = (e) => {
    e.preventDefault();
    const params = {
      text: e.target.text.value,
    };

    getData({ params, addItems });
  };
  return (
    <>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid" style={{ justifyContent: "center" }}>
          <form
            className="navbar-form"
            id="search"
            style={{ display: "flex", textAlign: "center" }}
            onSubmit={submitForm}
          >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                name="text"
              />
            </div>
            <button
              type="submit"
              className="btn btn-success"
              style={{ marginLeft: "5px" }}
            >
              Send
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default HeaderComponent;
