import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keywords, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Seaching for ${keywords}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="container">
      <form onSubmit={search}>
        <input
          type="search"
          className="form-control"
          onChange={handleKeywordChange}
          autoFocus={true}
        />
      </form>
    </div>
  );
}
