import React from "react";
// import getData from "../services/connection";

const HeaderComponent = () => {
  const greeting = "Hello Function Component!";

  return (
    <>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid" style={{ justifyContent:"center" }}>
         
            <form
              className="navbar-form"
              id="search"
              style={{ display: "flex", textAlign: "center" }}
            >
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
              <button type="submit" class="btn btn-success" style={{ marginLeft:"5px" }}>Submit</button>
            </form>
        </div>
      </nav>
    </>
  );
};

export default HeaderComponent;
