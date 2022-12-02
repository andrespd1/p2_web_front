import React from "react";

function Header(props) {
  return (
    <div
      style={{
        width: "full-width",
        backgroundColor: "#A6C8CD",
        height: "100px",
      }}>
      <h1
        style={{
          textAlign: "center",
          verticalAlign: "middle",
          marginTop: "35px",
        }}>
        Bandas Musicales
      </h1>
    </div>
  );
}

export default Header;
