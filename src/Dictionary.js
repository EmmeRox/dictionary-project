import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
  let [keywords, setKeyword] = useState(props.defaultKeyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResult(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keywords}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    // Documentation: https://dictionaryapi.dev/
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            className="form-control"
            onChange={handleKeywordChange}
            autoFocus={true}
            placeholder="Search..."
          />
        </form>
        <Results result={result} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
