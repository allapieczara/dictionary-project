import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  //DOCUMENTATION: https://dictionaryapi.dev/
  //https://api.dictionaryapi.dev/api/v2/entries/en/teal

  return (
    <div className="Dictionary">
      <form onSubmit={search} className="search-form">
        <input
          type="search"
          autoFocus={true}
          onChange={handleKeywordChange}
        ></input>
      </form>
      <Results results={results} />
    </div>
  );
}
