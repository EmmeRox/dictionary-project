import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keywords, setKeyword] = useState(props.defaultKeyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    console.log(response.data[0]);
    setResult(response.data[0]);
  }

  function handlePexelResponse(response) {
    setPhotos(response.data.photos);
    console.log(response);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keywords}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "1xPmF11U0CVIoU1vWJepM6Xlp5d22Z9l1D1keR0DdSpfdn1mgkUn3yrY";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keywords}&per_page=6`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer${pexelsApiKey}` },
      })
      .then(handlePexelResponse);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
