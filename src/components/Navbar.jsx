import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Kiwi</span>
      <div className="user">
        <img
          src="https://cdn.justjared.com/wp-content/uploads/headlines/2018/07/chester-bennington-tribute.jpg"
          alt=""
        />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
