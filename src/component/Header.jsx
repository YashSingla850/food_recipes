import React from "react";
// import FastfoodIcon from "@mui/icons-material/Fastfood";
const Header = (props) => {
  const { search, onInputChange, onSearchClick } = props;

  return (
    <div className="jumbotron">
      <div className="main-box mx-auto ">
        {/* <span>{FastfoodIcon}</span> */}
        <h1 className="display-1 heading ">food recipe</h1>
        <div className="input-group mb-3 w-50 input">
          <input
            type="text"
            className="form-control"
            placeholder="search your food ... "
            value={search}
            onChange={onInputChange}
          />
          <button className="btn btn-dark " onClick={onSearchClick}>
            search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
