import React from "react";

function Search() {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Search" />
      </div>
      <div className="userChat">
        <img
          src="https://cdn.justjared.com/wp-content/uploads/headlines/2018/07/chester-bennington-tribute.jpg"
          alt=""
        />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
}

export default Search;
