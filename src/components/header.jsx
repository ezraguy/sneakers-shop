import React from "react";
const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="logo"></div>
        <div className="links">
          <div className="link">collections</div>
          <div className="link">men</div>
          <div className="link">woman</div>
          <div className="link">about</div>
          <div className="link">contact</div>
        </div>
      </div>
      <div className="wrapper">
        <div className="cart"></div>
        <div className="user"></div>
      </div>
    </div>
  );
};

export default Header;
