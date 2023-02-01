import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keywords, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`Seaching for ${keywords}`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keywords}`;
    axios.get(apiUrl).then(handleResponse);
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
