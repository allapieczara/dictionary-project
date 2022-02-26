import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
    console.log(response.data);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  //DOCUMENTATION: https://dictionaryapi.dev/
  //https://api.dictionaryapi.dev/api/v2/entries/en/teal

  function handleSubmit(event) {
    event.preventDefault();
    search();
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
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up? </h1>
          <form onSubmit={handleSubmit} className="search-form">
            <input
              type="search"
              autoFocus={true}
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            ></input>
          </form>
          <div className="hint">
            Suggested words: star, sun, galaxy, Ursa Major...
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
